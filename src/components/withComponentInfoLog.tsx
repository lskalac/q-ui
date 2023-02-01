import React, {useContext} from 'react';
import {LogMessageContext} from '../context/LogMessageContext';

export const withComponentInfoLog =
	(Component: React.FC<any>) => (props: any) => {
		const logMessage = useContext(LogMessageContext);
		console.log(`${logMessage} ${Component.name}`);

		return <Component {...props} />;
	};
