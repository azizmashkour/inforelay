// const ROOT_URL = 'https://secret-hamlet-03431.herokuapp.com';
const ROOT_URL = 'https://covidrelaiapi.herokuapp.com/api';

export async function loginUser(dispatch, loginPayload) {
	const bearerToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMSIsImp0aSI6ImRjNWEzZDNkYjRkYWExYWI1ODQ1YjA1YWFmZTVlNTA2MTVlYWYwOTVlYTdkY2NhMGEyMDQxYjUyN2NkOGY0ZjU2ZTQ3YTUzOWIzNTliOTlhIiwiaWF0IjoiMTYxMTMzNjY5My4yOTcxMjUiLCJuYmYiOiIxNjExMzM2NjkzLjI5NzEzMiIsImV4cCI6IjE2MTI2MzI2OTMuMjcwOTUwIiwic3ViIjoiIiwic2NvcGVzIjpbXX0.NIGHlfXNcQYlPogenreIPBd491kokd0gzyiBzL0hIrUr5wOnDRVFehNt0rOaaqODpV-C1iSvht0uhYGHMr7AFNZYjvPaRWtNeUirNi2pRGFcoh--uVLshLCD_EDP1X6My3NlSa6YKeFrB9ViG0fk3gtq1Du6SYq36coNkquiz0Rmg2CZbtLFBDJdtoz5YEW3SWs3K9LMu3bgxCUFm1AzjFfvvjzx_sRUREq50_Xo6CQX0MQGQMUsd9z_R23qaZNHlwOMj9ts9TZqSQLzzjUIe1rBGqzZwfItUWBhDwnUaTIJDw0_uEAgfdLu-NxV-rsMdcyZUfrvYVsOWyq0xYYAsBLv9x6GivpfNOj0yk0SQDZn3R7QbCf6zMFgSbfSZJ9iVGnYdnjFPAarYUL43E5kThnPfMsHRcOe9xQnhtXdslvXG-JsFg_TmQCzZQTRO85guPfJNmMoru-CMrMAnC4iQhqDf2tC_hQS3rT56POjIoyj2QzH6gZWDBM1KHsi7SZRlbqBuI5G9X7fgxWsgIhjny3gwJiGC7nNQBTHFZ6LI6-q8KXnmCihoN4mbQDgSN44S3IEUKdR3zZgMgMKH4-oTgpDAIv7lCIJaVZAHOmIiiKF6v_0acJDEtTwTMCvxMz08K__-OfaNbsOke3kbS90eGr-xCJPN4P4z1RIo0VRR5Y";

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${bearerToken}`,
		},
		body: JSON.stringify(loginPayload),
	};

	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		let response = await fetch(`${ROOT_URL}/login`, requestOptions);
		let data = await response.json();

		if (data.user) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			localStorage.setItem('inf_current_user', JSON.stringify(data));
			localStorage.setItem('inf_user_token', JSON.stringify(data.access_token));
			return data;
		}

		dispatch({ type: 'LOGIN_ERROR', error: data.message });
		console.log(data.message);
		return;
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('inf_current_user');
	localStorage.removeItem('inf_user_token');
}
