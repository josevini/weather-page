import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { request } from '../../api/api'
import { ButtonSearch, Container, Form, Search, Text } from './styles'

export default function WeatherInfo() {
	const [valueSearch, setValueSearch] = useState('')
	const [city, setCity] = useState('?')
	const [temp, setTemp] = useState(0)
	const [feelsLike, setFeelsLike] = useState(0)

	return (
		<Container>
			<Form>
				<Search placeholder='Search' onChange={event => {
					setValueSearch(event.target.value)
				}} />
				<ButtonSearch onClick={() => {
					request(valueSearch, 'metric').then(response => {
						const data = response.data
						setCity(data.name)
						setTemp(data.main.temp)
						setFeelsLike(data.main.feels_like)
					})
				}}>
					<FaSearch />
				</ButtonSearch>
			</Form>
			<Text>Weather in {city}</Text>
			<Text>{temp}°C</Text>
			<Text>Feels Like {feelsLike}°C</Text>
		</Container>
	)
}