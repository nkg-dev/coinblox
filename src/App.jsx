// import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Navbar } from './components';

function App() {
	const styles = {
		header:
			'm-3 text-5xl font-black uppercase text-radix-amber-9 px-3 py-2 border-4 border-radix-amber-9 rounded-md w-fit',
	};

	return (
		<div className="dark:bg-radix-sand-dark-1">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main"></div>
			<div className="footer"></div>
		</div>
	);
}

export default App;
