import axios from 'axios'
import { WeatherResponse } from '../interfaces'

export async function request(city: string, units: string) {
	return await axios.get<WeatherResponse>(`${process.env.REACT_APP_URL}?appid=${process.env.REACT_APP_KEY}&q=${encodeURI(city)}&units=${units}`).then(response => {
		return response
	})
}