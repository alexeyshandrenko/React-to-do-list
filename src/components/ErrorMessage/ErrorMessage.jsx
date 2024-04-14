import styles from './error.module.css';

const ErrorMessage = ({ children }) => {
	return <p className={styles.error}>{`${children} :(`}</p>;
};

export default ErrorMessage;
