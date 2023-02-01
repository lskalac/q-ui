import {useContext} from 'react';
import {LogMessageContext} from '../context/LogMessageContext';

interface withUseLogMessageContextProps {
	logMessage: string;
}

export const withUseLogMessageContext =
	(
		Component: <T extends withUseLogMessageContextProps>(
			props: T
		) => JSX.Element
	) =>
	(props: any) => {
		return (
			<Component logMessage={useContext(LogMessageContext)} {...props} />
		);
	};
