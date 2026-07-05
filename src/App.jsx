  import './App.css'
  import {useState} from 'react'

  function App() {
    const [hour, setHour] = useState('1')
    const [minute, setMinute] = useState('00')
    const [ampm, setAmpm] = useState('AM')
    const [gmtFrom, setGmtFrom] = useState(-7)
    const [month, setMonth] = useState('July')
    const [day, setDay] = useState('3')
    const [gmtTo, setGmtTo] = useState(-4)
    // console.log(`Converting ${hour}:${minute} ${ampm} GMT${gmtFrom} on ${month}/${day}/${year} to GMT${gmtTo}`)
    const [newHour, setNewHour] = useState('4')
    const [newMinute, setNewMinute] = useState(0)
    const [newAmpm, setnewAmpm] = useState("AM")

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const daysInMonth = [31,29,31,30,31,30,31,31,30,31,30,31][months.indexOf(month)]
    if(day>daysInMonth){
      setDay(daysInMonth)
    }

    const [query, setQuery] = useState('')
    const [results, setResults] = useState('')
    const [opened, setOpened] = useState(False)
    const [loading, setLoading] = useState(True)
    
    let final = new Date(Date.UTC(2026, months.indexOf(month), day, (Number(hour)%12+(ampm=="PM"?12:0)) + Math.floor(Number(gmtTo)-Number(gmtFrom)), Number(minute) + Math.round(((Number(gmtTo)-Number(gmtFrom)) - Math.floor(Number(gmtTo)-Number(gmtFrom))) * 60)));
    let finalAmpm = final.getUTCHours()<12?"AM":"PM"; 

    return (
      <div id = "main">
        <h1 id="title">Timezone converter</h1>
        <h3 id="description">Convert between timezones</h3>
        <div id="page_layout">
          <div id="left">
            <div id="time_and_date">

              <select value={hour} className="date" onChange={(e)=>setHour(e.target.value)}>
                {Array.from({length:12}).map((_,i) => (
                  <option key={i} value={i+1}>{i+1}</option>
                ))}
              </select>

              <p className="labels" style={{marginInline:2}}>:</p>

              <select value={minute} onChange={(e)=>setMinute(e.target.value)}>
                {Array.from({length:60}).map((_,i) => (
                  <option key={i} value={i}>{(i<10?"0":"")+String(i)}</option>
                ))}
              </select>

              <select  value={ampm} onChange={(e)=>setAmpm(e.target.value)} >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>

              <p className="labels" style={{marginLeft:10,marginRight:5}}>GMT</p>
              <select value={gmtFrom} onChange={(e)=>setGmtFrom(e.target.value)}> 
                {Array.from({length:27}).map((_,i)=>(
                  <option key={i} value={26-i-12}>{((26-i-12)>0?"+":"")+String(26-i-12)}</option>
                ))}
              </select> 
              <p className="labels" style={{marginInline: 10}}>on</p>

              <select value={month} onChange={(e)=>setMonth(e.target.value)}>
                {months.map((item,index) => (
                  <option key={index} value={item}>{item}</option>
                  ))}
              </select>

              <select value={day} onChange={(e)=>setDay(e.target.value)}>
                {Array.from({length:daysInMonth}).map((_,i) => (
                  <option key={i} value={i+1}>{i+1}</option>
                ))}
              </select>

              <p className="labels" style={{marginLeft:15}}>to</p>
              <p className="labels" style={{marginLeft:10,marginRight:5}}>GMT</p>
              <select value={gmtTo} onChange={(e)=>setGmtTo(e.target.value)}> 
                {Array.from({length:27}).map((_,i)=>(
                  <option key={i} value={26-i-12}>{((26-i-12)>0?"+":"")+String(26-i-12)}</option>
                ))}
              </select>
            </div>
            <button id="convert" onClick={()=> {
              let final = new Date(Date.UTC(2026, months.indexOf(month), day, (Number(hour)%12+(ampm=="PM"?12:0)) + Math.floor(Number(gmtTo)-Number(gmtFrom)), Number(minute) + Math.round(((Number(gmtTo)-Number(gmtFrom)) - Math.floor(Number(gmtTo)-Number(gmtFrom))) * 60)));
              let finalAmpm = final.getUTCHours()<12?"AM":"PM"; 
              console.log(`${final.getUTCHours()%12 || 12}:${(final.getUTCMinutes()<10?"0":"")+String(final.getUTCMinutes())} ${finalAmpm} on ${months[final.getUTCMonth()]} ${final.getUTCDate()}`);
            }}>Convert</button>
          </div>
          
          <div id="right">
            <p style={{textAlign:"center"}}>{`${final.getUTCHours()%12 || 12}:${(final.getUTCMinutes()<10?"0":"")+String(final.getUTCMinutes())} ${finalAmpm} on ${months[final.getUTCMonth()]} ${final.getUTCDate()}`}</p>
          </div>
        </div>
      </div>
    )
  }

export default App