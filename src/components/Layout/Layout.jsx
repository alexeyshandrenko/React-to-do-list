import styles from './layout.module.css';

const Layout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<main className={styles.container}>{children}</main>
		</div>
	);
};

export default Layout;
