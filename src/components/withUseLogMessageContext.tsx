import {useContext} from 'react';
import {LogMessageContext} from '../context/LogMessageContext';


export interface withUseLogMessageContextProps {
	logMessage: string;
}
export type Props<T extends unknown> = T & withUseLogMessageContextProps;
type ComponentType = <T extends unknown>(props: Props<T>) => JSX.Element;

export const withUseLogMessageContext =
	(
		Component: ComponentType
	) =>
	(props: any) => {
		return (
			<Component logMessage={useContext(LogMessageContext)} {...props} />
		);
	};
