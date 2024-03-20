import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

// const contactsReduser = (
// 	state = {
// 		items: [
// 			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// 			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// 			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// 			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// 		],
// 	},
// 	action
// ) => {
// 	switch (action.type) {
// 		default:
// 			return state;
// 	}
// };
// const filterReduser = (state = { name: '' }, action) => {
// 	switch (action.type) {
// 		default:
// 			return state;
// 	}
// };

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filters: filtersReducer,
	},
});
console.log(store);
