import { useSelector, useDispatch } from 'react-redux';
import { updVote } from '../reducers/anecdoteReducer';
import { setNotif } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter === '') {
      return state.anecdotes;
    }
    const filtered = state.anecdotes.filter((v) =>
      v.content.toLowerCase().includes(state.filter.toLowerCase())
    );
    return filtered;
  });
  const dispatch = useDispatch();

  const addVote = (voted) => () => {
    const updObj = { ...voted, votes: voted.votes + 1 };
    dispatch(updVote(updObj));
    dispatch(setNotif(`you voted ${voted.content}`, 3));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={addVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
