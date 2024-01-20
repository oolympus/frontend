import axios from 'axios'

export default function api( token?: string ) {
	if ( token ) {
		return axios.create( ( {
			baseURL: "http://172.105.41.169/api/v1",
			headers: {
				Authorization: `Bearer ${token}`
			}
		} ) )
	}

	return axios.create( ( {
		baseURL: "http://172.105.41.169/api/v1",
	} ) )
}
