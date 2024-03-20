import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	contacts: {
		items: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
	},
};

export const addContact = createAction('contacts/addContact');

export const deleteContact = createAction('contacts/deleteContact');

export const contactsReducer = createReducer(initialState, builder => {
	builder
		.addCase(addContact, (state, action) =>
			state.contacts.items.push(action.payload)
		)
		.addCase(
			deleteContact,
			(state, action) =>
				(state.contacts.items = state.contacts.items.filter(
					contact => contact.id !== action.payload
				))
		);
});

// const slice = createSlice({
// 	name: 'contacts',
// 	initialState,
// 	reducers: {
// 		addContact(state, action) {},
// 		deleteContact(state, action) {},
// 	},
// });
// console.dir(slice);

// export const contactsReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'contacts/addContact':
// 			return {
// 				...state,
// 				contacts: {
// 					items: [...state.contacts.items, action.payload],
// 				},
// 			};
// 		case 'contacts/deleteContact':
// 			return {
// 				...state,
// 				contacts: {
// 					items: state.contacts.items.filter(
// 						contact => contact.id !== action.payload
// 					),
// 				},
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const addContact = newContact => {
// 	return {
// 		type: 'contacts/addContact',
// 		payload: newContact,
// 	};
// };

// export const deleteContact = contactId => {
// 	return {
// 		type: 'contacts/deleteContact',
// 		payload: contactId,
// 	};
// };
