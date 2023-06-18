import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter === '') {
      return state.anecdotes;
    }
    console.log(state.filter);
    console.log(state.anecdotes);
    const filtered = state.anecdotes.filter((v) =>
      v.content.toLowerCase().includes(state.filter.toLowerCase())
    );
    console.log(filtered);
    return filtered;
  });
  const dispatch = useDispatch();

  const addVote = (id) => () => {
    dispatch(vote(id));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
