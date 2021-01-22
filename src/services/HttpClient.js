import { environment as env } from '../environments/env.dev';

export async function searchArticles(query) {
  const toHttpParams = `${env.API_BASE_URL + env.API_MOVIES_URL}?q=`;
  return await fetch(toHttpParams + (query || env.DEFAULT_SEARCH_MOVIE));
}

export async function loadNotifs() {
  let token = localStorage.getItem('inf_user_token') && JSON.parse(localStorage.getItem('inf_user_token'));

  const requestOptions = {
		method: 'GET',
		headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`
		},
	};
  return await fetch(`${env.API_BASE_URL_INF + env.API_NOTIFS_URL}`, requestOptions);
}

export async function loadRequests() {
  let token = localStorage.getItem('inf_user_token') && JSON.parse(localStorage.getItem('inf_user_token'));

  const requestOptions = {
		method: 'GET',
		headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`
		},
	};
  return await fetch(`${env.API_BASE_URL_INF + env.API_REQUESTS_URL}`, requestOptions);
}

export async function findArticle(id) {
  return await fetch(`${env.API_BASE_URL + env.API_MOVIE_URL}/` + id);
}
