import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import request from '../../api/api'
import './styles.css'

export default function WeatherInfo () {
    const [valueSearch, setValueSearch] = useState('')
    const [city, setCity] = useState('?')
    const [temp, setTemp] = useState(0)


    return (
        <main className='weather-container'>
            <div className='form'>
                <input className='search' placeholder='Search'
                    onChange={(event) => {
                        setValueSearch(event.target.value)
                    }}
                />
                <button className='btn-search'
                    onClick={() => {
                        request(valueSearch, 'metric')
                        .then(response => response.json())
                        .then(json => {
                            setCity(json.name)
                            setTemp(json.main.temp)
                        })
                    }}
                >
                    <FaSearch />
                </button>
            </div>
            <h2>Weather in {city}</h2>
            <h2>{temp}°C</h2>
        </main>
    )
}