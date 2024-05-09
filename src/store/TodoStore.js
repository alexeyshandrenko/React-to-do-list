import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createTodoAPI, editTodoAPI, deleteTodoAPI } from './../api/api';

const initialState = {
	todos: null,
	loading: false,
	error: '',
};

export const useTodoStore = create()(
	devtools((set) => ({
		...initialState,
		getTodos: () => {
			set({ loading: true });
			set({ error: '' });
			setTimeout(async () => {
				try {
					const response = await fetch('http://localhost:3001/todos');
					if (!response.ok) {
						throw new Error('Error was happened!');
					}
					const data = await response.json();
					set({ todos: data });
				} catch (err) {
					set({ error: err.message });
				} finally {
					set({ loading: false });
				}
			}, 1000);
		},
		createTodo: async (title) => {
			const data = await createTodoAPI(title);
			if (data) {
				set((state) => ({ todos: [data, ...state.todos] }));
			}
		},
		editTodo: async (id, title) => {
			const data = await editTodoAPI(id, title);
			if (data) {
				set((state) => ({
					todos: [
						...state.todos.map((todo) => (todo.id === data.id ? data : todo)),
					],
				}));
			}
		},
		deleteTodo: async (id) => {
			const data = await deleteTodoAPI(id);
			if (data) {
				set((state) => ({
					todos: [...state.todos.filter((todo) => todo.id !== data.id)],
				}));
			}
		},
	})),
);
