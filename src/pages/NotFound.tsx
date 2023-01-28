import { Title } from "../components/elements/Title"

export const NotFound = () => {
    return <div className="page">
        <Title text="404" />
        <p> Ooops! Page you are looking for is not found.</p>
    </div>
}