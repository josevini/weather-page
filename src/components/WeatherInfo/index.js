import { Component } from 'react'
import './styles.css'

export default class WeatherInfo extends Component {
    render() {
        return (
            <main className='weather-container'>
                <h2>Weather in City</h2>
                <h2>26°C</h2>
            </main>
        )
    }
}