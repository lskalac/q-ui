import { FC } from "react";

interface TitleProps {
    text: string;
}

export const Title: FC<TitleProps> = ({
    text
}) => {
    return <h1 className="title">{text}</h1>
}