import axios from 'axios';

class TodoService {
	#URL = 'http://localhost:3001/todos/';

	async getTodos() {
		return await axios.get(this.#URL);
	}

	async getTodoById(id) {
		return await axios.get(`${this.#URL}${id}`);
	}

	async createTodo(title) {
		return await axios.post(
			this.#URL,
			{ title },
			{
				headers: {
					'Content-type': 'application/json',
				},
			},
		);
	}

	async editTodo(id, title) {
		return await axios.put(
			`${this.#URL}${id}`,
			{ title },
			{
				headers: {
					'Content-type': 'application/json',
				},
			},
		);
	}

	async deleteTodo(id) {
		return await axios.delete(`${this.#URL}${id}`);
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TodoService();
