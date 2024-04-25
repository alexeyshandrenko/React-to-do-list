import {
	SET_ERROR_ACTION,
	SET_LOADING_ACTION,
	SET_TODOS_ACTION,
	CREATE_TODO_ACTION,
} from '../types/types';

const initialState = {
	todos: null,
	loading: false,
	error: '',
};

export const todoReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_TODOS_ACTION:
			return { ...state, todos: payload };
		case CREATE_TODO_ACTION:
			return { ...state, todos: [payload, ...state.todos] };
		case SET_LOADING_ACTION:
			return { ...state, loading: payload };
		case SET_ERROR_ACTION:
			return { ...state, error: payload };
		default:
			return state;
	}
};