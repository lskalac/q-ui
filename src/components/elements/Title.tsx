import {FC} from 'react';
import {withComponentInfoLog} from '../withComponentInfoLog';

interface TitleProps {
	text: string;
}

export const Title: FC<TitleProps> = ({text}) => {
	return <h1 className="title">{text}</h1>;
};

export default withComponentInfoLog(Title);
