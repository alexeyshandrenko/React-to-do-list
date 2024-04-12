import { useState, useRef, useEffect } from 'react';
import styles from './todoItem.module.css';
import editTask from './../../assets/edit-task.svg';
import deleteTask from './../../assets/delete-task.svg';

import Description from '../Description';

const TodoItem = ({ title, id, editTodo, deleteTodo }) => {
	const [isEditable, setIsEditable] = useState(false);
	const [editInput, setEditedInput] = useState(title);
	const editInputRef = useRef(null);

	useEffect(() => {
		if (isEditable && editInputRef.current) {
			editInputRef.current.focus();
		}
	}, [isEditable]);

	const handleKeyPress = async (e) => {
		if (e.key === 'Enter' && editInput) {
			await editTodo(id, editInput);
			setIsEditable(false);
		}
	};

	const handleBlur = async () => {
		await editTodo(id, editInput);
		setIsEditable(false);
	};

	return (
		<li className={styles.item}>
			<div className={styles.field}>
				{isEditable ? (
					<input
						type="text"
						className={styles.input}
						ref={editInputRef}
						value={editInput}
						onKeyDown={handleKeyPress}
						onChange={(e) => setEditedInput(e.target.value)}
						onBlur={handleBlur}
					/>
				) : (
					<Description>{title}</Description>
				)}
			</div>

			<div className={styles.buttons}>
				<button
					onClick={() => setIsEditable(!isEditable)}
					className={styles.button}
				>
					<img src={editTask} alt={`edit-task-${id}`} />
				</button>
				<button onClick={() => deleteTodo(id)} className={styles.button}>
					<img src={deleteTask} alt={`delete-task-${id}`} />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
