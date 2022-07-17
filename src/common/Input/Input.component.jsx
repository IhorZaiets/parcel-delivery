import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { cities } from '../../srervices/services';
import { parcelTypes } from '../../srervices/services';

import classes from './Input.module.css';

const Input = ({
	handleChange,
	label,
	className,
	inputClass,
	labelClass,
	dataList,
	...otherProps
}) => {
	const citiesList = (
		<datalist id='cities'>
			{cities.map((city) => (
				<option value={city} key={uuidv4()} />
			))}
		</datalist>
	);

	const typesList = (
		<datalist id='types'>
			{parcelTypes.map((type) => (
				<option value={type} key={uuidv4()} />
			))}
		</datalist>
	);

	return (
		<div className={`${classes.group} ${className}`}>
			<input
				className={`${classes['form-input']} ${inputClass}`}
				onChange={handleChange}
				autoComplete='off'
				list={dataList}
				{...otherProps}
			/>
			{dataList === 'cities' && citiesList}
			{dataList === 'types' && typesList}
			{label ? (
				<label
					className={`${otherProps.value.length ? classes.shrink : ''} ${
						classes['form-input-label']
					} ${labelClass}`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default Input;
