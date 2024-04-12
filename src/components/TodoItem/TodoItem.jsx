import styles from './todoItem.module.css';
import editTask from './../../assets/edit-task.svg';
import deleteTask from './../../assets/delete-task.svg';

import Button from '../Button';
import Description from '../Description';

const TodoItem = ({ title, id }) => {
	return (
		<li className={styles.item}>
			<Description>{title}</Description>
			<div className={styles.buttons}>
				<Button>
					<img src={editTask} alt={`edit-task-${id}`} />
				</Button>
				<Button>
					<img src={deleteTask} alt={`delete-task-${id}`} />
				</Button>
			</div>
		</li>
	);
};

export default TodoItem;
