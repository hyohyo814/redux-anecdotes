import { createSlice } from '@reduxjs/toolkit'
const initialState = '';


const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterText(state, action) {
      const string = action.payload
      return string
    }
  }
})

export const { filterText } = filterSlice.actions
export default filterSlice.reducer;
