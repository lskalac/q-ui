import {useEffect, useState} from 'react';

export const useFetch = <T,>(fetch: () => Promise<T>) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [data, setData] = useState<T>();

	const handleFetch = async () => {
		setData(await fetch());
		setIsLoading(false);
	};

	useEffect(() => {
		handleFetch();
	}, []);

	const refetch = async () => {
		setIsLoading(true);
		await handleFetch();
	};

	return {isLoading, data, refetch};
};
