import { useSelector, useDispatch } from 'react-redux';
import { createAnec } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);

  const addPost = (event) => {
    event.preventDefault();
    const post = event.target.newAnecdote.value;
    event.target.newAnecdote.value = '';
    dispatch(createAnec(post));
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addPost}>
        <div>
          <input name="newAnecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
