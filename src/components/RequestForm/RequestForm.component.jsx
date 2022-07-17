import React from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Input from '../../common/Input/Input.component.jsx';
import { Button } from '../../common/Button/Button.component.jsx';
import { addRequest, editRequest } from '../../store/requests/actionCreators';

import classes from './RequestForm.module.css';

const RequestForm = ({ addRequest, requests, editRequest }) => {
	const navigation = useNavigate();
	const { id } = useParams();

	const editedRequestData = requests.find((request) => request.id === id);

	const validate = (values) => {
		const errors = {};

		if (!values.departureCity) {
			errors.departureCity = 'Required';
		}
		if (!values.deliveryCity) {
			errors.deliveryCity = 'Required';
		}
		if (!values.parcelType) {
			errors.parcelType = 'Required';
		}
		if (!values.date) {
			errors.date = 'Required';
		}
		if (!values.description) {
			errors.description = 'Required';
		}

		return errors;
	};

	const initialValues = id
		? {
				departureCity: editedRequestData.departureCity,
				deliveryCity: editedRequestData.deliveryCity,
				parcelType: editedRequestData.parcelType,
				date: editedRequestData.date,
				description: editedRequestData.description,
		  }
		: {
				departureCity: '',
				deliveryCity: '',
				parcelType: '',
				date: '',
				description: '',
		  };

	const formRequest = useFormik({
		initialValues,
		validate,
		onSubmit: (values) => {
			id
				? editRequest({ id: id, ...values })
				: addRequest({ id: uuidv4(), ...values });
			navigation('/');
		},
	});

	return (
		<form
			className={classes['request-form']}
			onSubmit={formRequest.handleSubmit}
		>
			<h2 className={classes.title}>Create your request</h2>
			<Input
				label='Departure city'
				name='departureCity'
				id='departureCity'
				type='text'
				dataList='cities'
				className={classes.departureCity}
				inputClass={`${
					formRequest.errors.departureCity ? `${classes.red}` : null
				}`}
				labelClass={`${
					formRequest.errors.departureCity ? `${classes.red}` : null
				}`}
				onChange={formRequest.handleChange}
				value={formRequest.values.departureCity}
			/>
			<Input
				label='Delivery city'
				name='deliveryCity'
				id='deliveryCity'
				type='text'
				dataList='cities'
				className={classes.deliveryCity}
				inputClass={`${
					formRequest.errors.deliveryCity ? `${classes.red}` : null
				}`}
				labelClass={`${
					formRequest.errors.deliveryCity ? `${classes.red}` : null
				}`}
				onChange={formRequest.handleChange}
				value={formRequest.values.deliveryCity}
			/>
			<Input
				label='Parcel type'
				name='parcelType'
				id='parcelType'
				type='text'
				dataList='types'
				className={classes.parcelType}
				inputClass={`${
					formRequest.errors.parcelType ? `${classes.red}` : null
				}`}
				labelClass={`${
					formRequest.errors.parcelType ? `${classes.red}` : null
				}`}
				onChange={formRequest.handleChange}
				value={formRequest.values.parcelType}
			/>
			<Input
				name='date'
				id='date'
				type='date'
				className={classes.date}
				inputClass={`${formRequest.errors.date ? `${classes.red}` : null}`}
				onChange={formRequest.handleChange}
				value={formRequest.values.date}
			/>
			<Input
				label='Parcel description'
				name='description'
				id='description'
				type='text'
				className={classes.description}
				inputClass={`${
					formRequest.errors.description ? `${classes.red}` : null
				}`}
				labelClass={`${
					formRequest.errors.description ? `${classes.red}` : null
				}`}
				onChange={formRequest.handleChange}
				value={formRequest.values.description}
			/>
			<Button type='submit' className={classes.btn}>
				Submit
			</Button>
		</form>
	);
};

const mapDispatchToProps = {
	addRequest,
	editRequest,
};

const mapStateToProps = (state) => {
	return {
		requests: state.requests,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);
