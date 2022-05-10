import { FaSearch } from 'react-icons/fa'
import './styles.css'

export default function WeatherInfo () {
    return (
        <main className='weather-container'>
            <form className='form'>
                <input className='search' placeholder='Search' />
                <button className='btn-search'>
                    <FaSearch />
                </button>
            </form>
            <h2>Weather in City</h2>
            <h2>26°C</h2>
        </main>
    )
}