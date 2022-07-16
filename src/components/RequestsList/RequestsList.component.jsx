import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button.component.jsx';
import RequestItem from '../RequestItem/RequestItem.component.jsx';

import classes from './RequestsList.module.css';

const RequestsList = ({ requests }) => {
	const navigation = useNavigate();

	const onCreate = (event) => {
		event.preventDefault();
		navigation('/request-form');
	};

	return (
		<>
			<Button className={classes.btn} onClick={onCreate}>
				Create request
			</Button>
			<ul>
				{requests.map((request) => (
					<RequestItem key={request.id} id={request.id} {...request} />
				))}
			</ul>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		requests: state.requests,
	};
};

export default connect(mapStateToProps)(RequestsList);
