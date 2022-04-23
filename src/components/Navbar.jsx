import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
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

const { Item, Root } = NavigationMenu;

const Navbar = () => {
	const styles = {
		// menuItem:
		// 	'px-5 py-3 flex cursor-pointer items-center gap-3 font-semibold dark:text-radix-amber-dark-11 dark:hover:text-radix-amber-dark-12 dark:hover:bg-radix-sand-dark-4',
		logo: 'm-2 text-3xl font-black uppercase cursor-pointer px-2 py-1 leading-none border-4 border-radix-amber-9 rounded-md w-fit bg-radix-amber-9 dark:bg-radix-amber-dark-9 dark:hover:bg-radix-amber-dark-10 dark:hover:border-radix-amber-dark-10 dark:text-radix-amber-dark-1 text-radix-amber-1 tracking-wide',
		// header:
		// 	'm-3 text-5xl font-black uppercase text-radix-amber-dark-9 px-3 py-2 border-4 border-radix-amber-dark-9 rounded-md w-fit',
		item: 'rounded-sm py-2 px-4 tracking-wider hover:bg-radix-sand-4 dark:hover:bg-radix-sand-dark-4',
		root: 'm-2 flex w-fit list-none items-center gap-5 rounded-md text-lg font-semibold text-radix-amber-10 dark:text-radix-amber-dark-10',
	};
	return (
		<div className="flex items-center justify-between">
			<div className={styles.logo}>
				{/* <Avatar src={icon} size="large" /> */}
				<Link to="/">Coinblox</Link>
			</div>
			<div>
				<Root className={styles.root}>
					<Item className={styles.item}>
						<Link to="/">Home</Link>
					</Item>
					<Item className={styles.item}>
						<Link to="/crypocurrencies">Cryptocurrencies</Link>
					</Item>
					<Item className={styles.item}>
						<Link to="/exchanges">Exchanges</Link>
					</Item>
					<Item className={styles.item}>
						<Link to="/news">News</Link>
					</Item>
				</Root>
			</div>
			{/* <Menu theme="Dark">
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
			</Menu> */}
		</div>
	);
};

export default Navbar;
