import { Suspense } from 'react';
import styles from './layout.module.css';
import Loader from '../Loader';

const Layout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<main className={styles.container}>
				<Suspense fallback={<Loader />}>{children}</Suspense>
			</main>
		</div>
	);
};

export default Layout;
