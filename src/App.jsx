// import './App.css';
import { Switch, Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import {
	Navbar,
	Homepage,
	Exchanges,
	CryptoDetails,
	Cryptocurrencies,
	News,
	Footer,
} from './components';

function App() {
	const styles = {
		header:
			'm-3 text-5xl font-black uppercase text-radix-amber-9 px-3 py-2 border-4 border-radix-amber-9 rounded-md w-fit',
	};

	return (
		<div className="bg-radix-sand-1 dark:bg-radix-sand-dark-1">
			<div className="navbar">
				<Navbar />
			</div>
			<main className="main">
				<Layout>
					<Routes>
						<Route exact path="/" element={<Homepage />}></Route>
					</Routes>
					<Routes>
						<Route exact path="exchanges" element={<Exchanges />}></Route>
					</Routes>
					<Routes>
						<Route exact path="cryptocurrencies" element={<Cryptocurrencies />}>
							<Route exact path=":coindId" element={<CryptoDetails />} />
						</Route>
					</Routes>
					<Routes>
						<Route exact path="news" element={<News />}></Route>
					</Routes>
				</Layout>
			</main>
			<Footer />
		</div>
	);
}

export default App;
