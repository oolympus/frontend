import axios from 'axios'

export default function api( token?: string ) {
	if ( token ) {
		return axios.create( ( {
			baseURL: "http://127.0.0.1/api/v1",
			headers: {
				Authorization: `Bearer ${token}`
			}
		} ) )
	}

	return axios.create( ( {
		baseURL: "http://127.0.0.1/api/v1",
	} ) )
}
