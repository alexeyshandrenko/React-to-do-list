import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import TodoService from '../services/TodoService';

export const useEditTodo = (id, title) => {
	const queryClient = useQueryClient();
	return useMutation(['todos/edit'], () => TodoService.editTodo(id, title), {
		enabled: id && title,
		onSuccess: () => queryClient.invalidateQueries(['todo/get', id]),
	});
};
