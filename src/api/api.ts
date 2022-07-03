import axios from 'axios'


export async function request(city: string, units: string) {
	return await axios.get(`${process.env.REACT_APP_URL}?appid=${process.env.REACT_APP_KEY}&q=${encodeURI(city)}&units=${units}`).then(response => {
		return response
	})
}