import { createContext, useState, useEffect } from 'react';
import { createTodoAPI, editTodoAPI, deleteTodoAPI } from '../api/api';

export const TodosContext = createContext(null);

export const TodosContextProvider = ({ children }) => {
	const [todos, setTodos] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			setError('');
			setTimeout(async () => {
				try {
					const response = await fetch('http://localhost:3001/todos');
					if (!response.ok) {
						throw new Error('Error was happened!');
					}
					const data = await response.json();
					setTodos(data);
				} catch (err) {
					setError(err.message);
				} finally {
					setLoading(false);
				}
			}, 1000);
		};

		getData();
	}, []);

	const createTodo = async (title) => {
		const data = await createTodoAPI(title);
		if (data) {
			setTodos([data, ...todos]);
		}
	};

	const editTodo = async (id, title) => {
		const data = await editTodoAPI(id, title);
		if (data) {
			const newTodos = todos.map((todo) => (todo.id === id ? data : todo));
			setTodos(newTodos);
		}
	};

	const deleteTodo = async (id) => {
		const data = await deleteTodoAPI(id);
		if (data) {
			const newTodos = todos.filter((todo) => todo.id !== data.id);
			setTodos(newTodos);
		}
	};

	const getTodoById = (id) => {
		return todos.find((todo) => todo.id === id);
	};

	return (
		<TodosContext.Provider
			value={{
				todos,
				setTodos,
				loading,
				setLoading,
				error,
				setError,
				createTodo,
				editTodo,
				deleteTodo,
				getTodoById,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};
