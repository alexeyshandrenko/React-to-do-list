import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoService from '../services/TodoService';

export const useDeleteTodo = (id) => {
	const queryClient = useQueryClient();
	return useMutation(['todos/delete'], () => TodoService.deleteTodo(id), {
		enabled: !!id,
		onSuccess: () => queryClient.invalidateQueries(['todos/get']),
	});
};
