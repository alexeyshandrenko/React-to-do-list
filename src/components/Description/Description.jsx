import styles from './description.module.css';

const Description = ({ children }) => {
	return <p className={styles.text}>{children}</p>;
};

export default Description;
