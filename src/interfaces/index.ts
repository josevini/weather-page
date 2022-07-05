export interface WeatherResponse {
	name: string,
	weather: [
		{
			id: number,
			main: string,
			description: string,
			icon: string
		}
	],
	main: {
		temp: number,
		feels_like: number
	}
}