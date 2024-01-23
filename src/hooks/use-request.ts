import axios from 'axios';

export default function useRequest() {

	const token = window.localStorage.getItem( 'accessToken' );

	return axios.create( ( {
		baseURL: "http://172.105.41.169/api/v1",
		headers: {
			Authorization: `Bearer ${token}`
		}
	} ) )
}

