import { useQueryClient, useMutation } from '@tanstack/react-query';
import TodoService from '../services/TodoService';

export const useCreateTodo = (title) => {
	const queryClient = useQueryClient();
	return useMutation(['todos/create'], (title) => TodoService.createTodo(title), {
		enabled: !!title,
		onSuccess: () => queryClient.invalidateQueries(['todos/get']),
	});
};
