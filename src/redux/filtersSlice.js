import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	filter: {
		name: '',
	},
};
export const setFilterName = createAction('filter/setFilterName');
export const filtersReducer = createReducer(initialState, builder => {
	builder.addCase(
		setFilterName,
		(state, action) => (state.filter.name = action.payload)
	);
});

// export const filtersReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'filter/setFilterName':
// 			return {
// 				...state,
// 				filter: {
// 					...state.filter,
// 					name: action.payload,
// 				},
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const setFilterName = newName => {
// 	return {
// 		type: 'filter/setFilterName',
// 		payload: newName,
// 	};
// };
