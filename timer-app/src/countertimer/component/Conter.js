import React, { useState, useEffect } from 'react'
import './Conter.css'



const Conter = () => {
  const [time, setTime] = useState(0) // for store the variable we create hook esme input k time k data store rahega jo user input karega
  
  const [active, setActive] = useState(false) // yeh hook active k liye hai jo start k liye use hoga

  const handelinput = (e) => {
    setTime(parseInt(e.target.value * 60)) // parseInt is a function that converts its the value in integer taki koi bhi value input mai pass ho woh integer mai convert ho jaye or *60 is for the second se minute mai convert karne k liye
  }// yeh funtion input mai jo bhi value dalenge usko time mai convert karke show karega

  const formatetime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, '0') // this function is for the time
    const sec = String(time % 60).padStart(2, '0') // this function is for the second

    return `${min}:${sec}`
  } // yeh function time ko min or sec mai convert karke show  . **CONNECT krne k liye (time) use kr rhe hai

  const handlestart = () => {
    setActive(true) // yeh function start button k liye hai jo time ko start karega setactive true karega jo phle fase mai tha
  }

  const handlestop = () => {
    setActive(false) // yeh function stop button k liye hai jo time ko stop karega setactive false karega taki countdown ruk jaye
  }

  const handelreset = () => {
    setTime(0) // yeh function reset button k liye hai jo time ko 0 set karega taki wapas se time set kar sake
    setActive(false) // reset hone k baad active ko false set karenge taki automatic start na ho
  }

  useEffect(() => {
    let interval;
    if (active && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1) // yeh function time ko 1 second kam karne k liye use ho raha hai jab active true hoga
      }, 1000)
    } else {
      clearInterval(interval) // agar active false ho ya time 0 ho to interval clear ho jayega taki timer na chale
    }
    return () => clearInterval(interval) // cleanup function jo interval ko remove karega jab component unmount hoga ya active false hoga
  }, [active, time])

  return (
    <div className='Conter'>
      <h1>COUNTER TIME</h1>
      <div>
        <input type='number' placeholder='Set the timer ' onChange={handelinput} />
        <div>{formatetime()}</div>
        <div className='timer-controls'>
          <button onClick={handlestart}>START</button>
          <button onClick={handlestop}>STOP</button>
          <button onClick={handelreset}>RESET</button>
        </div>
      </div>
    </div>
  )
}

export default Conter





// active name k hook ko true or false k liye use kiya hai jo start or stop button k liye use hoga jab stop krenge to stop funtion chleaha or active ko false kr dega or jab start krenge to start funtion chalega or active ko true kr dega 
// use baad jab active true hoha tab woh useEffect mai jayega or time>0 hoga to interval chalega or time ko 1 second kam karega or jab active false hoga to interval clear ho jayega taki timer ruk jaye 