import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button.component.jsx';
import { deleteRequest } from '../../store/requests/actionCreators';

import classes from './RequestItem.module.css';

const RequestItem = (props) => {
	const {
		departureCity,
		deliveryCity,
		parcelType,
		date,
		description,
		deleteRequest,
		id,
	} = props;
	const navigation = useNavigate();

	const onEdit = (event) => {
		event.preventDefault();
		navigation(`/update/${id}`);
	};

	const onDelete = (event) => {
		event.preventDefault();
		deleteRequest(id);
	};

	return (
		<li className={classes['request-item']}>
			<div className={classes.direction}>
				<span className={`${classes.city} ${classes.departure}`}>
					{departureCity}
				</span>
				<span className={classes.arrow}>&#8594;</span>
				<span className={`${classes.city} ${classes.delivery}`}>
					{deliveryCity}
				</span>
			</div>
			<dl className={classes['parcel-info']}>
				<dt>Type of parcel:</dt>
				<dd className={classes['parcel-type']}>{parcelType}</dd>
				<dt>Date of dispatch:</dt>
				<dd className={classes.date}>{date}</dd>
				<dt>Description:</dt>
				<dd>{description}</dd>
			</dl>
			<div className={classes.buttons}>
				<Button className={classes.edit} onClick={onEdit}>
					Edit
				</Button>
				<Button className={classes.delete} onClick={onDelete}>
					Delete
				</Button>
			</div>
		</li>
	);
};

const mapDispatchToProps = {
	deleteRequest,
};

export default connect(null, mapDispatchToProps)(RequestItem);
