import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './task.module.css';
import back from './../../assets/arrow-back.svg';
import editTask from './../../assets/edit-task.svg';
import editTaskActive from './../../assets/edit-task-active.svg';
import deleteTask from './../../assets/delete-task.svg';
import { useTodosContext } from '../../hooks/useTodosContext';

const Task = () => {
	const [isEditable, setIsEditable] = useState(false);
	const [description, setDescription] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();
	const textareaRef = useRef(null);
	const { getTodoById, editTodo, deleteTodo } = useTodosContext();
	const todo = getTodoById(id);

	useEffect(() => {
		if (isEditable && textareaRef.current) {
			textareaRef.current.focus();
		}
	}, [isEditable]);

	const toggleEditTodo = async (id, title) => {
		await editTodo(id, title);
		setIsEditable(false);
	};

	const toggleDeleteTodo = async (id) => {
		await deleteTodo(id);
		navigate(-1);
	};

	const toggleEditable = () => {
		setDescription(todo.title);
		setIsEditable(!isEditable);
	};

	return (
		<>
			<div className={styles.header}>
				<button onClick={() => navigate(-1, { replace: true })}>
					<img src={back} alt={`back-arrow-${id}`} />
				</button>
			</div>
			<div
				className={
					!todo
						? `${styles.wrapper} ${styles.wrapper_center}`
						: `${styles.wrapper}`
				}
			>
				{!todo && <p className={styles.text}>Task not found :(</p>}
				{todo && (
					<div className={styles.field}>
						<div className={styles.buttons}>
							<button onClick={toggleEditable} className={styles.button}>
								<img
									src={isEditable ? editTaskActive : editTask}
									alt={`edit-task-${id}`}
								/>
							</button>
							<button
								onClick={() => toggleDeleteTodo(id)}
								className={styles.button}
							>
								<img src={deleteTask} alt={`delete-task-${id}`} />
							</button>
						</div>
						{isEditable ? (
							<>
								<textarea
									ref={textareaRef}
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									className={styles.textarea}
								/>
								<button
									onClick={() => toggleEditTodo(id, description)}
									className={styles.buttonSave}
								>
									Save
								</button>
							</>
						) : (
							<p className={styles.text}>{todo.title}</p>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default Task;
