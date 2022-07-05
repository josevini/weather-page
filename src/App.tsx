import React from 'react'
import styled from 'styled-components'
import WeatherInfo from './components/WeatherInfo'
import day_city from './assets/day-city.jpg'

const Main = styled.main`
	width: 100vw;
	height: 100vh;
	background-image: url(${day_city});
	background-size: cover;
	background-position: center center;
`

export default function App() {
	return (
		<Main>
			<WeatherInfo />
		</Main>
	)
}