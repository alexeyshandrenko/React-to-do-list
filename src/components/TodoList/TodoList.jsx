import styles from './todoList.module.css';
import { useSelector } from 'react-redux';
import { searchAndSortTodos } from '../../utils/methods';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import TodoItem from '../TodoItem';

const TodoList = ({ search, sorted }) => {
	const { todos, loading, error } = useSelector((state) => state.todoState);

	const searchedAndSortedTodos = searchAndSortTodos(todos, sorted, search);
	const noItemsFound =
		search && searchedAndSortedTodos && searchedAndSortedTodos.length === 0;

	return (
		<div
			className={
				loading || error || noItemsFound
					? `${styles.wrapper} ${styles.wrapper_center}`
					: `${styles.wrapper}`
			}
		>
			{loading && <Loader />}
			{error && <ErrorMessage>{error}</ErrorMessage>}
			{noItemsFound && <p className={styles.text}>Tasks not found!</p>}
			{!loading && todos && !noItemsFound && (
				<>
					<h2 className={styles.title}>Tasks to do - {todos.length}</h2>
					<ul className={styles.list}>
						{searchedAndSortedTodos.map((todo) => {
							return (
								<TodoItem key={todo.id} id={todo.id} title={todo.title} />
							);
						})}
					</ul>
				</>
			)}
		</div>
	);
};

export default TodoList;
