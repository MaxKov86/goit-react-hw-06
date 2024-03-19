import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';
import { deleteContact } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
	const dispatch = useDispatch();
	const handleRemoveClick = e => {
		if (e.target.nodeName !== 'BUTTON') {
			return;
		}
		dispatch(deleteContact(e.currentTarget.id));
	};
	return (
		<>
			<li id={id} className={css.item} onClick={handleRemoveClick}>
				<div className={css.itemInfoContainer}>
					<p className={css.text}>
						<IoPerson className={css.iconPerson} />
						{name}
					</p>
					<p className={css.text}>
						<FaPhone className={css.iconPhone} />
						{number}
					</p>
				</div>
				<button className={css.button} type="button">
					Delete
				</button>
			</li>
		</>
	);
};
export default Contact;
