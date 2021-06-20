const URL = 'http://localhost'
const PORT = '8090'
const SERVICE = `${URL}:${PORT}`

export const httpRequest = (method, body, url) => {
	const requestOptions = {
		method: method,
		headers: {
			'Content-Type': 'application/json'
		},
		crossDomain: true,
		body: JSON.stringify(body)
	}

	return fetch(SERVICE + url, requestOptions)
}
