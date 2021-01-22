import React, { useState, useReducer } from 'react';

let user = localStorage.getItem('inf_current_user')
	? JSON.parse(localStorage.getItem('inf_current_user')).user
	: '';
let token = localStorage.getItem('inf_current_user')
	? JSON.parse(localStorage.getItem('inf_current_user')).access_token
	: '';

export const initialState = {
	user: '' || user,
	token: '' || token,
	loading: false,
	errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
	switch (action.type) {
		case 'REQUEST_LOGIN':
			return {
				...initialState,
				loading: true,
			};
		case 'LOGIN_SUCCESS':
			return {
				...initialState,
				user: action.payload.user,
				token: action.payload.access_token,
				loading: false,
			};
		case 'LOGOUT':
			return {
				...initialState,
				user: '',
				token: '',
			};

		case 'LOGIN_ERROR':
			return {
				...initialState,
				loading: false,
				errorMessage: action.error,
			};

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};
