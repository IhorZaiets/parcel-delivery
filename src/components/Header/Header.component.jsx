import React from 'react';

import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<h1 className={classes['main-title']}>
				The best delivery company in Ukraine!
			</h1>
		</header>
	);
};

export default Header;
