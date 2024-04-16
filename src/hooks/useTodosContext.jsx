import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export const useTodosContext = () => {
	const context = useContext(TodosContext);

	if (!context) {
		throw new Error('TodosContext is not available, maybe problem with provider');
	}

	return context;
};
