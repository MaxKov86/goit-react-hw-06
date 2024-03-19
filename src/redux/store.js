import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
	contacts: {
		items: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
	},

	filter: {
		name: '',
	},
};

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

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'contacts/addContact':
			return {
				...state,
				contacts: {
					items: [...state.contacts.items, action.payload],
				},
			};
		case 'contacts/deleteContact':
			return {
				...state,
				contacts: {
					items: state.contacts.items.filter(
						contact => contact.id !== action.payload
					),
				},
			};
		case 'filter/setFilterName':
			return {
				...state,
				filter: {
					...state.filter,
					name: action.payload,
				},
			};
		default:
			return state;
	}
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
