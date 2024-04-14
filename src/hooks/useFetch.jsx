import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			setError('');
			setTimeout(async () => {
				try {
					const response = await fetch(url);
					if (!response.ok) {
						throw new Error('Error was happened!');
					}
					const data = await response.json();
					setData(data);
				} catch (err) {
					setError(err.message);
				} finally {
					setLoading(false);
				}
			}, 1000);
		};

		getData();
	}, [url]);

	return { data, setData, loading, error };
};

export default useFetch;
