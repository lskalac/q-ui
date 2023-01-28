import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFound} from './pages/NotFound';
import {LayoutWrapper, routes} from './routes';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{routes.map((x, i) => (
						<Route
							{...x}
							key={i}
							element={<LayoutWrapper {...x} />}
						/>
					))}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
