import { useSelector, useDispatch } from 'react-redux'
import NewPost from './components/NewPost'
import Anecdotes from './components/Anecdotes'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
  }

  return (
    <div>
      <Anecdotes />
      <NewPost />
    </div>
  )
}

export default App