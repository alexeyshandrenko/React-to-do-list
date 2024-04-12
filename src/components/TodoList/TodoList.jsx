import styles from './todoList.module.css';

import Loader from '../Loader';
import Error from '../Error';
import Title from '../Title';
import TodoItem from '../TodoItem';
import Description from '../Description';

const TodoList = ({ todos, loading, error, editTodo, deleteTodo, search }) => {
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
			{error && <Error>{error}</Error>}
			{noItemsFound && <Description>Tasks not found!</Description>}
			{!loading && todos && !noItemsFound && (
				<>
					<Title>Tasks to do - {todos.length}</Title>
					<ul className={styles.list}>
						{todos.map((todo) => {
							return (
								<TodoItem
									key={todo.id}
									id={todo.id}
									title={todo.title}
									editTodo={editTodo}
									deleteTodo={deleteTodo}
								/>
							);
						})}
					</ul>
				</>
			)}
		</div>
	);
};

export default TodoList;
