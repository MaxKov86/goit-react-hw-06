import Contact from './Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
	const filterValue = useSelector(state => state.filter.name);
	console.log(filterValue);
	const contacts = useSelector(state => state.contacts.items);
	console.log(contacts);
	const filtredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filterValue.toLowerCase())
	);
	console.log(contacts);
	return (
		<ul className={css.contactList}>
			{filtredContacts.map(contact => (
				<Contact
					key={contact.id}
					id={contact.id}
					name={contact.name}
					number={contact.number}
				/>
			))}
		</ul>
	);
};
export default ContactList;
