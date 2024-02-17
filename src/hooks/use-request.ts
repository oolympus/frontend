import axios from 'axios';

export default function useRequest() {

	const token = window.localStorage.getItem( 'accessToken' );

	const location = window.location.pathname

	return location.includes( "auth" ) ? axios.create( ( {
		baseURL: import.meta.env.VITE_APP_BASE_URL,
	} ) ) : axios.create( ( {
		baseURL: import.meta.env.VITE_APP_BASE_URL,
		headers: {
			Authorization: `Bearer ${token}`
		}
	} ) )
}

