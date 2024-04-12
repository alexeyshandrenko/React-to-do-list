import { useState } from 'react';

import useFetch from '../../hooks/useFetch';

import Layout from '../Layout';
import Header from '../Header/Header';
import TodoList from '../TodoList';

const Todo = () => {
	const [search, setSearch] = useState('');
	const [sorted, setSorted] = useState(false);
	const { todos, setTodos, loading, error } = useFetch('http://localhost:3001/todos');

	const searchedTodos = () => {
		if (todos) {
			const filteredTodos = todos.filter((todo) =>
				todo.title.toLowerCase().includes(search.toLowerCase()),
			);
			if (sorted) {
				return filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
			}
			return filteredTodos;
		}
		return null;
	};

	const createTodo = async (title) => {
		try {
			const response = await fetch('http://localhost:3001/todos', {
				method: 'POST',
				body: JSON.stringify({ title }),
				headers: {
					'Content-type': 'application/json',
				},
			});
			if (!response.ok) {
				throw new Error('Error was happened!');
			}
			const data = await response.json();
			setTodos([...todos, data]);
		} catch (err) {
			console.error(err.message);
		}
	};

	const editTodo = async (id, title) => {
		try {
			const response = await fetch(`http://localhost:3001/todos/${id}`, {
				method: 'PUT',
				body: JSON.stringify({ title }),
				headers: {
					'Content-type': 'application/json',
				},
			});
			if (!response.ok) {
				throw new Error('Error was happened!');
			}
			const data = await response.json();
			console.log('data', data);
			const newTodos = todos.map((todo) => {
				return todo.id === id ? data : todo;
			});
			setTodos(newTodos);
		} catch (err) {
			console.error(err.message);
		}
	};

	const deleteTodo = async (id) => {
		try {
			const response = await fetch(`http://localhost:3001/todos/${id}`, {
				method: 'DELETE',
			});
			if (!response.ok) {
				throw new Error('Errow was happened!');
			}
			const newTodos = todos.filter((todo) => todo.id !== id);
			setTodos(newTodos);
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Layout>
			<Header
				sorted={sorted}
				setSorted={setSorted}
				search={search}
				setSearch={setSearch}
				createTodo={createTodo}
			/>
			<TodoList
				search={search}
				deleteTodo={deleteTodo}
				editTodo={editTodo}
				todos={searchedTodos()}
				loading={loading}
				error={error}
			/>
		</Layout>
	);
};

export default Todo;
