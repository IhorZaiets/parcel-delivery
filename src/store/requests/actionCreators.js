import RequestTypes from './actionTypes';

export const addRequest = (request) => ({
	type: RequestTypes.ADD_REQUEST,
	payload: request,
});

export const deleteRequest = (id) => ({
	type: RequestTypes.DELETE_REQUEST,
	payload: id,
});

export const editRequest = (request) => ({
	type: RequestTypes.EDIT_REQUEST,
	payload: request,
});

export const fetchRequests = () => ({
	type: RequestTypes.FETCH_REQUESTS,
});
