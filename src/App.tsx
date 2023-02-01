import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {logMessage, LogMessageContext} from './context/LogMessageContext';
import {NotFound} from './pages/NotFound';
import {LayoutWrapper, routes} from './routes';

function App() {
	return (
		<div className="App">
			<LogMessageContext.Provider value={logMessage}>
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
			</LogMessageContext.Provider>
		</div>
	);
}

export default App;
