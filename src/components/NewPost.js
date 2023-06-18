import { useSelector, useDispatch } from 'react-redux'

const NewPost = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  const addPost = (event) => {
    event.preventDefault();
    const post = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch({
      type: 'NEW_POST',
      payload: post,
    })
  }

  return (
    <>
    <h2>create new</h2>
    <form onSubmit={addPost}>
      <div>
        <input name='newAnecdote'/>
      </div>
      <button type='submit'>create</button>
    </form>
    </>
  );
};

export default NewPost;
