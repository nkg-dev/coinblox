import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
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
			'px-5 py-3 flex cursor-pointer items-center gap-3 font-semibold dark:text-radix-amber-dark-11 dark:hover:text-radix-amber-dark-12 dark:hover:bg-radix-sand-dark-4',
		logo: 'mx-2 text-2xl font-black uppercase cursor-pointer px-4 py-2 border-4 border-radix-amber-9 rounded-md w-fit dark:bg-radix-amber-dark-9 dark:hover:bg-radix-amber-dark-10 dark:hover:border-radix-amber-dark-10',
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
