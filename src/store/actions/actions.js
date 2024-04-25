import {
	SET_LOADING_ACTION,
	SET_ERROR_ACTION,
	SET_TODOS_ACTION,
	CREATE_TODO_ACTION,
} from '../types/types';
import { createTodoAPI } from '../../api/api';

export const setLoadingAction = (payload) => ({ type: SET_LOADING_ACTION, payload });
export const setErrorAction = (payload) => ({ type: SET_ERROR_ACTION, payload });
export const setTodosAction = (payload) => ({ type: SET_TODOS_ACTION, payload });
export const createTodoAction = (payload) => ({ type: CREATE_TODO_ACTION, payload });

export const getTodosAsyncAction = (dispatch) => {
	dispatch(setLoadingAction(true));
	dispatch(setErrorAction(''));
	setTimeout(async () => {
		try {
			const response = await fetch('http://localhost:3001/todos');
			if (!response.ok) {
				throw new Error('Error was happened!');
			}
			const data = await response.json();
			dispatch(setTodosAction(data));
		} catch (err) {
			dispatch(setErrorAction(err.message));
		} finally {
			dispatch(setLoadingAction(false));
		}
	}, 1000);
};

export const createTodoAsyncAction = (title) => async (dispatch) => {
	const data = await createTodoAPI(title);
	if (data) {
		dispatch(createTodoAction(data));
	}
};
