import { useQuery } from '@tanstack/react-query';
import TodoService from '../services/TodoService';

export const useTodoById = (id) => {
	return useQuery(['todo/get', id], () => TodoService.getTodoById(id), {
		select: ({ data }) => data,
		enabled: !!id,
	});
};
