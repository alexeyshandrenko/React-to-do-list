import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodosAsyncAction } from '../../store/actions/actions';
import Header from './../../components/Header/Header';
import TodoList from './../../components/TodoList/TodoList';

const Home = () => {
	const [search, setSearch] = useState('');
	const [sorted, setSorted] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodosAsyncAction);
	}, [dispatch]);

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
