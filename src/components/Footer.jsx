import React from 'react';

const Footer = () => {
	const styles = {
		footerHeader: '',
		footerLink:
			'rounded-sm bg-radix-sand-4 px-2 font-medium text-radix-sand-10 hover:underline dark:bg-radix-sand-dark-4 dark:text-radix-sand-dark-10',
	};
	return (
		<footer className="flex flex-grow justify-center bg-radix-sand-2 p-10 text-sm font-medium tracking-wide text-radix-sand-9 dark:bg-radix-sand-dark-2 dark:text-radix-sand-dark-9">
			Powered by data from&nbsp;
			<a
				className={styles.footerLink}
				href="https://www.coingecko.com/en/api"
				target="_blank"
				rel="noreferrer">
				{' '}
				CoinGecko API
			</a>
			&nbsp; &nbsp; | &nbsp; &nbsp; Designed &amp; developed by&nbsp;{' '}
			<a
				className={styles.footerLink}
				href="https://www.nkg.dev/"
				target="_blank"
				rel="noreferrer">
				NKG.dev
			</a>
		</footer>
	);
};

export default Footer;
