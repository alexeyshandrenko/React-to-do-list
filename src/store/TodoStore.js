import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState = {
	todos: null,
};

export const useTodoStore = create()(
	devtools((set) => ({
		...initialState,
		setTodos: (data) => set({ todos: data }),
		createTodo: (data) => set((state) => ({ todos: [data, ...state.todos] })),
		editTodo: (data) =>
			set((state) => ({
				todos: [
					...state.todos.map((todo) => (todo.id === data.id ? data : todo)),
				],
			})),
		deleteTodo: (data) =>
			set((state) => ({
				todos: [...state.todos.filter((todo) => todo.id !== data.id)],
			})),
	})),
);
