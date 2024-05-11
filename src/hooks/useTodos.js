import { useQuery } from '@tanstack/react-query';
import TodoService from '../services/TodoService';

export const useTodos = () => {
	return useQuery(['todos/get'], () => TodoService.getTodos(), {
		select: ({ data }) => data,
	});
};
