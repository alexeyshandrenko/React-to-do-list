import styles from './error.module.css';

const Error = ({ children }) => {
	return <p className={styles.error}>{`${children} :(`}</p>;
};

export default Error;
