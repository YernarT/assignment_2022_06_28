import axios from 'axios';

export const apiServerInstance = axios.create({
	// baseURL: 'http://localhost:8000',
	baseURL: 'https://assignment-2022-06-28.herokuapp.com',
	validateStatus: status => status >= 200 && status < 300,
});

// Response interceptor
apiServerInstance.interceptors.response.use(
	response => response.data,
	error => {
		if (error.response && error.response.status) {
			let { status } = error.response;

			if (status >= 500) {
				return Promise.reject({
					message: 'The server crashed...',
				});
			}

			if (status >= 400) {
				return Promise.reject(error.response.data);
			}
		}

		if (error.message === 'Network Error') {
			return Promise.reject({
				message: 'Server failed, try again later',
			});
		}

		console.error('Error in request: ', error);
		return Promise.reject(error);
	},
);
