import { Link } from 'react-router-dom';
import styles from './todoItem.module.css';

const TodoItem = ({ title, id }) => {
	return (
		<li className={styles.item}>
			<Link to={`task/${id}`} className={styles.field}>
				<p className={styles.text}>{title}</p>
			</Link>
		</li>
	);
};

export default TodoItem;
