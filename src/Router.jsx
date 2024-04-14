import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import Task from './screens/Task';
import Layout from './components/Layout';
import NotFound from './screens/NotFound/NotFound';

const Router = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/task/:id" element={<Task />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
};

export default Router;
