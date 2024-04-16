import { useState } from 'react';
import styles from './header.module.css';
import searchIcon from './../../assets/search.svg';
import sortIcon from './../../assets/sort-task.svg';
import { useTodosContext } from '../../hooks/useTodosContext';

const Header = ({ search, setSearch, sorted, setSorted }) => {
	const [todo, setTodo] = useState('');
	const { createTodo } = useTodosContext();

	const handleChange = (e) => {
		const { value, name } = e.target;
		switch (name) {
			case 'todo':
				setTodo(value);
				break;
			default:
				setSearch(value);
		}
	};

	const handleKeyPress = async (e) => {
		if (e.key === 'Enter' && todo) {
			await createTodo(todo);
			setTodo('');
		}
	};

	return (
		<div className={styles.header}>
			<button
				onClick={() => setSorted(!sorted)}
				className={
					sorted ? `${styles.button} ${styles.button_active}` : styles.button
				}
			>
				<img src={sortIcon} alt="sort-icon" />
			</button>

			<div className={styles.headerInput}>
				<input
					className={styles.input}
					name="todo"
					type="text"
					placeholder="Add a new task"
					value={todo}
					onChange={handleChange}
					onKeyDown={handleKeyPress}
				/>
			</div>
			<div className={styles.searchInput}>
				<img className={styles.icon} src={searchIcon} alt="search-icon" />
				<input
					type="text"
					name="search"
					className={styles.search}
					placeholder="Search tasks..."
					value={search}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default Header;
