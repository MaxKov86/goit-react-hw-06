import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterName } from '../../redux/filtersSlice';

const SearchBar = () => {
	const dispatch = useDispatch();
	const filterValue = useSelector(state => state.filter.name);
	console.log(filterValue);

	return (
		<>
			<p>Find contacts by name</p>
			<input
				onChange={e => dispatch(setFilterName(e.target.value))}
				className={css.searchBar}
				type="text"
				value={filterValue}
				placeholder="Search by name"
			/>
		</>
	);
};
export default SearchBar;
