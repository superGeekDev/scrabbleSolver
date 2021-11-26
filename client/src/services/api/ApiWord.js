const BASE_API_URL = "http://localhost:8000";

export function getWords (word) {
	return fetch(`${BASE_API_URL}/words/${word}`, {method: "GET"})
		.then(res => res.json())
		.catch(err => console.log(err));
}