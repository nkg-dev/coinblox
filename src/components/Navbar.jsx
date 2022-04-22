import React from 'react';
import { Button, Menu, Typography, Avatar, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import {
	HomeOutlined,
	BulbOutlined,
	MoneyCollectOutlined,
	WalletOutlined,
	FundOutlined,
	MenuOutlined,
} from '@ant-design/icons';
import icon from '../img/cryptocurrency.png';

const Navbar = () => {
	const styles = {
		menuItem:
			'mx-6 my-3 flex cursor-pointer items-center gap-3 hover:underline dark:text-radix-amber-dark-11 dark:hover:text-radix-amber-dark-10',
		logo: 'mx-2 text-2xl font-black uppercase cursor-pointer px-4 py-2 border-4 border-radix-amber-9 rounded-md w-fit dark:text-radix-amber-dark-9 dark:hover:text-radix-amber-dark-10 dark:hover:border-radix-amber-dark-10',
		header:
			'm-3 text-5xl font-black uppercase text-radix-amber-9 px-3 py-2 border-4 border-radix-amber-9 rounded-md w-fit',
	};
	return (
		<div className="nav-container">
			<div className="logo-container">
				{/* <Avatar src={icon} size="large" /> */}
				{/* <h1 className={styles.header}>Coinblox</h1> */}
				<Typography.Title level={2} className={styles.logo}>
					<Link to="/">Coinblox</Link>
					{/* <Button className="menu-control-container"></Button> */}
				</Typography.Title>
				<Menu theme="Dark">
					<Menu.Item icon={<HomeOutlined />} className={styles.menuItem}>
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item icon={<WalletOutlined />} className={styles.menuItem}>
						<Link to="/crypocurrencies">Crypocurrencies</Link>
					</Menu.Item>
					<Menu.Item icon={<FundOutlined />} className={styles.menuItem}>
						<Link to="/exchanges">Exchanges</Link>
					</Menu.Item>
					<Menu.Item icon={<BulbOutlined />} className={styles.menuItem}>
						<Link to="/news">News</Link>
					</Menu.Item>
				</Menu>
			</div>
		</div>
	);
};

export default Navbar;
