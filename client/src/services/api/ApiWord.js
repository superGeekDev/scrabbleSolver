import {BASE_API_URL} from "../../constants";

const baseUrl = BASE_API_URL;

export function getWords (word) {
	return fetch(`${baseUrl}/words?letters=${word}`, {method: "GET"})
		.then(res => res.json())
		.catch(err => console.log(err));
}