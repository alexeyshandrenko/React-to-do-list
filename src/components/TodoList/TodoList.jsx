import styles from './todoList.module.css';

import Loader from '../Loader';
import Error from '../Error';
import Title from '../Title';
import TodoItem from '../TodoItem';

const TodoList = ({ todos, loading, error }) => {
	return (
		<div
			className={
				todos ? styles.wrapper : `${styles.wrapper} ${styles.wrapper_center}`
			}
		>
			{loading && <Loader />}
			{error && <Error>{error}</Error>}
			{todos && (
				<>
					<Title>Tasks to do - {todos.length}</Title>
					<ul className={styles.list}>
						{todos.map((todo, index) => {
							return <TodoItem key={index} title={todo.title} />;
						})}
					</ul>
				</>
			)}
		</div>
	);
};

export default TodoList;
