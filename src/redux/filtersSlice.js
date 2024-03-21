import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'filters',
	initialState: {
		name: '',
	},
	reducers: {
		changeFilter(state, action) {
			state.name = action.payload;
		},
	},
});

export const { changeFilter } = slice.actions;

console.log(changeFilter(''));

export const selectNameFilter = state => state.filters.name;
export default slice.reducer;
