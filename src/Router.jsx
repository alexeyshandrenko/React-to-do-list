import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./screens/Home/Home'));
const Task = lazy(() => import('./screens/Task'));
const NotFound = lazy(() => import('./screens/NotFound/NotFound'));

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
