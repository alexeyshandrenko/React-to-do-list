import { useNavigate } from 'react-router-dom';
import styles from './notFound.module.css';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.wrapper}>
			<div className={styles.notFound}>
				<h2 className={styles.title}>404</h2>
				<p className={styles.text}>Oops. Looks like you took a wrong turn.</p>
				<button onClick={() => navigate(-1)} className={styles.button}>
					<span>Go back</span>
				</button>
			</div>
		</div>
	);
};

export default NotFound;
