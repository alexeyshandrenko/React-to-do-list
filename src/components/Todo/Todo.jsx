import { useState, useEffect } from 'react';

import Layout from '../Layout';
import Header from '../Header/Header';
import TodoList from '../TodoList';

const Todo = () => {
	const [todos, setTodos] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const getTodos = async () => {
			try {
				setLoading(true);
				setError('');
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/todos',
				);
				if (!response.ok) {
					throw new Error('Error was happened');
				}
				const data = await response.json();
				setTodos(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		getTodos();
	}, []);

	return (
		<Layout>
			<Header />
			<TodoList todos={todos} loading={loading} error={error} />
		</Layout>
	);
};

export default Todo;
