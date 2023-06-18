import { useDispatch } from 'react-redux'
import { filterText } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const filter = event.target.value
    dispatch(filterText(filter))
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
