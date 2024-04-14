import { useState } from 'react';

import { createTodoAPI } from '../../api/api';
import useFetch from './../../hooks/useFetch';
import Header from './../../components/Header/Header';
import TodoList from './../../components/TodoList/TodoList';

const Home = () => {
	const [search, setSearch] = useState('');
	const [sorted, setSorted] = useState(false);
	const {
		data: todos,
		setData: setTodos,
		loading,
		error,
	} = useFetch('http://localhost:3001/todos');

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
		const data = await createTodoAPI(title);
		if (data) {
			setTodos([data, ...todos]);
		}
	};

	return (
		<>
			<Header
				sorted={sorted}
				setSorted={setSorted}
				search={search}
				setSearch={setSearch}
				createTodo={createTodo}
			/>
			<TodoList
				search={search}
				todos={searchedTodos()}
				loading={loading}
				error={error}
			/>
		</>
	);
};

export default Home;
