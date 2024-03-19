export const addContact = ( newContact) => {
	return {
		type: 'contacts/addContact',
		payload: newContact,
	};
};

export const deleteContact = contactId => {
	return {
		type: 'contacts/deleteContact',
		payload: contactId,
	};
};

export const setFilterName = newName => {
	return {
		type: 'filter/setFilterName',
		payload: newName,
	};
};
