import { useState, useEffect } from 'react';
import { useTodoStore } from '../../store/TodoStore';
import Header from './../../components/Header/Header';
import TodoList from './../../components/TodoList/TodoList';

const Home = () => {
	const [search, setSearch] = useState('');
	const [sorted, setSorted] = useState(false);
	const getTodos = useTodoStore((state) => state.getTodos);

	useEffect(() => {
		getTodos();
	}, [getTodos]);

	return (
		<>
			<Header
				sorted={sorted}
				setSorted={setSorted}
				search={search}
				setSearch={setSearch}
			/>
			<TodoList search={search} sorted={sorted} />
		</>
	);
};

export default Home;
