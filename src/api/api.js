export const createTodoAPI = async (title) => {
	try {
		const response = await fetch('http://localhost:3001/todos', {
			method: 'POST',
			body: JSON.stringify({ title }),
			headers: {
				'Content-type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error('Error was happened!');
		}
		return await response.json();
	} catch (err) {
		console.error(err.message);
	}
};

export const editTodoAPI = async (id, title) => {
	try {
		const response = await fetch(`http://localhost:3001/todos/${id}`, {
			method: 'PUT',
			body: JSON.stringify({ title }),
			headers: {
				'Content-type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error('Error was happened!');
		}
		return await response.json();
	} catch (err) {
		console.error(err.message);
	}
};

export const deleteTodoAPI = async (id) => {
	try {
		const response = await fetch(`http://localhost:3001/todos/${id}`, {
			method: 'DELETE',
		});
		if (!response.ok) {
			throw new Error('Errow was happened!');
		}
		return await response.json();
	} catch (err) {
		console.error(err.message);
	}
};
