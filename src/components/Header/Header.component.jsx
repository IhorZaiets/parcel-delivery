import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<Link to='/'>
				<h1 className={classes['main-title']}>React post!</h1>
			</Link>
		</header>
	);
};

export default Header;
