import RequestTypes from './actionTypes';

const INITIAL_STATE = [
	{
		id: 'ygb12394c7cf1pn2m4',
		departureCity: 'Kyiv',
		deliveryCity: 'Vinnytsa',
		parcelType: 'clothes',
		date: '22/07/2022',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda nihil modi repellendus! Dolor, corporis!',
	},
	{
		id: 'cnpajwnvpi871',
		departureCity: 'Kyiv',
		deliveryCity: 'Vinnytsa',
		parcelType: 'clothes',
		date: '22/07/2022',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda nihil modi repellendus! Dolor, corporis!',
	},
	{
		id: 'b0b237c2p4239',
		departureCity: 'Kyiv',
		deliveryCity: 'Vinnytsa',
		parcelType: 'clothes',
		date: '22/07/2022',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda nihil modi repellendus! Dolor, corporis!',
	},
];

const requestReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RequestTypes.ADD_REQUEST:
			const addRequest = [action.payload, ...state];
			// localStorage.setItem('requests', JSON.stringify(addRequest));
			return addRequest;
		case RequestTypes.DELETE_REQUEST:
			console.log(action.payload);
			const afterDelete = state.filter(
				(request) => request.id !== action.payload
			);
			return afterDelete;
		default:
			return state;
	}
};

export default requestReducer;
