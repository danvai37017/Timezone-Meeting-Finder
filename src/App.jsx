import './App.css'
import { useState } from 'react'

function App() {
  return (
    <div style={{backgroundColor:'khaki'}}>
      <h1 id="title">Timezone converter</h1>
      <h3 id="description">Convert between timezones</h3>
      <div id="time_and_date">
        <input type="number" name="hour" className="date"></input>
        <p className="labels" style={{marginInline:2}}>:</p>
        <input type="number" name="minute" className="date"></input>
        <select name="ampm">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <p className="labels" style={{marginLeft:10,marginRight:5}}>GMT</p>
        <select name="GMTs">
          <option value="-7">-7</option>
          <option value="-4">-4</option>
        </select>
        <p className="labels" style={{marginInline: 10}}>on</p>
        <input type="number" name="month" className="date"></input>
        <input type="number" name="date" className="date"></input>
        <input type="number" name="year" style={{width:50}}></input>
        <p className="labels" style={{marginLeft:15}}>to</p>
        <p className="labels" style={{marginLeft:10,marginRight:5}}>GMT</p>
        <select name="GMTs">
          <option value="-7">-7</option>
          <option value="-4">-4</option>
        </select>
      </div>
      <button id="convert">Convert</button>
    </div>
  )
}

export default App
