import Contact from './Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
	const contacts = useSelector(state => state.contacts);
	console.log(contacts);
	return (
		<ul className={css.contactList}>
			{contacts.map(contact => (
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
