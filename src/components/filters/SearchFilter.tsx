import {FC} from 'react';
import {withComponentInfoLog} from '../withComponentInfoLog';

interface SearchFilterProps {
	onChange: (term: string) => void;
	placeholder?: string;
}

const SearchFilter: FC<SearchFilterProps> = ({
	onChange,
	placeholder = 'Search by...',
}) => {
	const onChangeInternal = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<input
			data-testId="search-filter"
			placeholder={placeholder}
			onChange={onChangeInternal}
			className="input"
		/>
	);
};

export default withComponentInfoLog(SearchFilter);
