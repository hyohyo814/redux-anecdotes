import { useDispatch } from 'react-redux';
import { createPost } from '../reducers/anecdoteReducer';
import { setNotif } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addPost = async (event) => {
    event.preventDefault();
    const post = event.target.newAnecdote.value;
    event.target.newAnecdote.value = '';
    dispatch(createPost(post));
    dispatch(setNotif(`${post} added to list`, 3));
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
