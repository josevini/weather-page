import { Component } from 'react'
import './styles.css'

export default class WeatherInfo extends Component {
    render() {
        return (
            <main className='weather-container'>
                <form className='form'>
                    <input className='search' />
                    <button className='btn-search'>search</button>
                </form>
                <h2>Weather in City</h2>
                <h2>26°C</h2>
            </main>
        )
    }
}