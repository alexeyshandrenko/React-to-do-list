import { useState } from 'react';
import Header from './../../components/Header/Header';
import TodoList from './../../components/TodoList/TodoList';

const Home = () => {
	const [search, setSearch] = useState('');
	const [sorted, setSorted] = useState(false);

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
