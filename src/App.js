import { Component } from 'react'
import WeatherInfo from './components/WeatherInfo'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <main className='main'>
        <WeatherInfo />
      </main>
    )
  }
}