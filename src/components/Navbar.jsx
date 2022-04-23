import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Link } from 'react-router-dom';

const { Item, Root } = NavigationMenu;

const Navbar = () => {
	const styles = {
		header: 'flex items-center justify-between',
		logo: 'm-2 text-3xl font-black uppercase cursor-pointer px-2 py-1 leading-none border-4 border-radix-amber-9 rounded-md w-fit bg-radix-amber-9 dark:bg-radix-amber-dark-9 dark:hover:bg-radix-amber-dark-10 dark:hover:border-radix-amber-dark-10 dark:text-radix-amber-dark-1 text-radix-amber-1 tracking-wide',
		root: 'm-2 flex w-fit list-none items-center gap-5 rounded-md text-lg font-semibold text-radix-amber-10 dark:text-radix-amber-dark-10',
		item: 'rounded-sm py-2 px-4 tracking-wider hover:bg-radix-sand-4 dark:hover:bg-radix-sand-dark-4',
	};
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
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
		</div>
	);
};

export default Navbar;
