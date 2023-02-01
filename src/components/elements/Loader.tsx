import { withComponentInfoLog } from "../withComponentInfoLog";

export const Loader = () => {
	return (
		<div className="loader">
			<span className="loader__spinner"></span>
		</div>
	);
};

export default withComponentInfoLog(Loader);