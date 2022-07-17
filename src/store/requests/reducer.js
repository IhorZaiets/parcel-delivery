import RequestTypes from './actionTypes';

const INITIAL_STATE = [];

const requestReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RequestTypes.ADD_REQUEST:
			const addRequest = [action.payload, ...state];
			localStorage.setItem('requests', JSON.stringify(addRequest));
			return addRequest;
		case RequestTypes.DELETE_REQUEST:
			const afterDelete = state.filter(
				(request) => request.id !== action.payload
			);
			localStorage.setItem('requests', JSON.stringify(afterDelete));
			return afterDelete;
		case RequestTypes.EDIT_REQUEST:
			const afetrEdit = state.map((request) =>
				request.id === action.payload.id ? action.payload : request
			);
			localStorage.setItem('requests', JSON.stringify(afetrEdit));
			return afetrEdit;
		case RequestTypes.FETCH_REQUESTS:
			return [...JSON.parse(localStorage.getItem('requests'))];
		default:
			return state;
	}
};

export default requestReducer;
