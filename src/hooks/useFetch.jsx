import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [todos, setTodos] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const getTodos = async () => {
			setLoading(true);
			setError('');
			setTimeout(async () => {
				try {
					const response = await fetch(url);
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

		getTodos();
	}, [url]);

	return { todos, setTodos, loading, error };
};

export default useFetch;
