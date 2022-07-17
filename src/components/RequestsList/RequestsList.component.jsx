import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button.component.jsx';
import RequestItem from '../RequestItem/RequestItem.component.jsx';
import { fetchRequests } from '../../store/requests/actionCreators';

import classes from './RequestsList.module.css';

const RequestsList = ({ requests, fetchRequests }) => {
	const navigation = useNavigate();

	const onCreate = (event) => {
		event.preventDefault();
		navigation('/request-form');
	};

	useEffect(() => {
		fetchRequests();
	}, [fetchRequests]);

	return (
		<>
			<Button className={classes.btn} onClick={onCreate}>
				Click here to create request
			</Button>
			{requests.length === 0 ? (
				<h2 className={classes['no-requests']}>
					There are no requests yet. Please create a new one.
				</h2>
			) : (
				<ul>
					{requests.map((request) => (
						<RequestItem key={request.id} id={request.id} {...request} />
					))}
				</ul>
			)}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		requests: state.requests,
	};
};

const mapDispatchToProps = {
	fetchRequests,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestsList);
