import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './task.module.css';
import back from './../../assets/arrow-back.svg';
import editTask from './../../assets/edit-task.svg';
import editTaskActive from './../../assets/edit-task-active.svg';
import deleteTask from './../../assets/delete-task.svg';
import useFetch from '../../hooks/useFetch';
import { deleteTodoAPI, editTodoAPI } from '../../api/api';
import Loader from '../../components/Loader';

const Task = () => {
	const textareaRef = useRef(null);
	const navigate = useNavigate();
	const { id } = useParams();
	const [isEditable, setIsEditable] = useState(false);
	const {
		data: todo,
		setData: setTodo,
		loading,
		error,
	} = useFetch(`http://localhost:3001/todos/${id}`);
	const [description, setDescription] = useState('');

	useEffect(() => {
		if (isEditable && textareaRef.current) {
			textareaRef.current.focus();
		}
	}, [isEditable]);

	const editTodo = async (id, title) => {
		const data = await editTodoAPI(id, title);
		if (data) {
			setTodo(data);
			setIsEditable(false);
		}
	};

	const deleteTodo = async (id) => {
		const data = await deleteTodoAPI(id);
		if (data) {
			navigate(-1);
		}
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
					loading || error || !todo
						? `${styles.wrapper} ${styles.wrapper_center}`
						: `${styles.wrapper}`
				}
			>
				{loading && <Loader />}
				{!loading && error && !todo && (
					<p className={styles.text}>Task not found :(</p>
				)}
				{!loading && !error && todo && (
					<div className={styles.field}>
						<div className={styles.buttons}>
							<button onClick={toggleEditable} className={styles.button}>
								<img
									src={isEditable ? editTaskActive : editTask}
									alt={`edit-task-${id}`}
								/>
							</button>
							<button
								onClick={() => deleteTodo(id)}
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
									onClick={() => editTodo(id, description)}
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
