import {MutableRefObject, useEffect, useState} from 'react';

export const useFetch = <T,>(
	fetch: () => Promise<T>,
	ref: MutableRefObject<boolean>
) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [data, setData] = useState<T>();

	const handleFetch = async () => {
		setData(await fetch());
		setIsLoading(false);
	};

	useEffect(() => {
		if (ref.current) handleFetch();

		return () => {
			ref.current = false;
		};
	}, [handleFetch, ref]);

	const refetch = async () => {
		setIsLoading(true);
		await handleFetch();
	};

	return {isLoading, data, refetch};
};
