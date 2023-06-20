import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const get = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

const createNew = async (content) => {
  const object = asObject(content)
  const res = await axios.post(baseUrl, object)
  return res.data
}

const update = async (obj) => {
  const res = await axios.put(`${baseUrl}/${obj.id}`, obj)
  return res.data
}



export default { getAll, get, createNew, update }