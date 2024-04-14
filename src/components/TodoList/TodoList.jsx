import styles from './todoList.module.css';

import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import TodoItem from '../TodoItem';

const TodoList = ({ todos, loading, error, search }) => {
	const noItemsFound = search && todos && todos.length === 0;
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
						{todos.map((todo) => {
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
