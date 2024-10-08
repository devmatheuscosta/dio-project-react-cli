import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { Cadastro } from './pages/cadastro';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/feed" element={<Feed />} />
				<Route path="/cadastro" element={<Cadastro />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
