import { useState } from 'react';
import styles from './header.module.css';
import searchIcon from './../../assets/search.svg';

const Header = () => {
	const [task, setTask] = useState('');
	const [search, setSearch] = useState('');

	const handleChange = (e) => {
		const { value } = e.target;
		setTask(value);
	};

	const handleChangeSearch = (e) => {
		const { value } = e.target;
		setSearch(value);
	};

	const handleClick = () => {
		if (task) {
			console.log(task);
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleClick();
		}
	};

	return (
		<div className={styles.header}>
			<div className={styles.headerInput}>
				<input
					className={styles.input}
					type="text"
					placeholder="Add a new task"
					value={task}
					onChange={handleChange}
					onKeyDown={handleKeyPress}
				/>
			</div>
			<div className={styles.searchInput}>
				<img className={styles.icon} src={searchIcon} alt="search-icon" />
				<input
					type="text"
					className={styles.search}
					placeholder="Search tasks..."
					value={search}
					onChange={handleChangeSearch}
				/>
			</div>
		</div>
	);
};

export default Header;
