import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterName } from '../../redux/actions';

const SearchBar = () => {
	const dispatch = useDispatch();
	const filterValue = useSelector(state => state.filter.name);
	const handleChange = e => {
		let searchValue = e.target.value;
		dispatch(setFilterName(searchValue));
	};

	return (
		<>
			<p>Find contacts by name</p>
			<input
				onChange={handleChange}
				className={css.searchBar}
				type="text"
				value={filterValue}
				placeholder="Search by name"
			/>
		</>
	);
};
export default SearchBar;
