export const searchAndSortTodos = (todos, sorted, search) => {
	if (todos) {
		const filteredTodos = todos.filter((todo) =>
			todo.title.toLowerCase().includes(search.toLowerCase()),
		);
		if (sorted) {
			return filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
		}
		return filteredTodos;
	}
	return null;
};
