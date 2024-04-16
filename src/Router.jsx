import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import Task from './screens/Task';
import Layout from './components/Layout';
import NotFound from './screens/NotFound/NotFound';
import { TodosContextProvider } from './context/TodosContext';

const Router = () => {
	return (
		<Layout>
			<TodosContextProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/task/:id" element={<Task />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</TodosContextProvider>
		</Layout>
	);
};

export default Router;
