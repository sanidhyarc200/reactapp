import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import Header from './day1/header'
import Signup from './day2/signup'
import Logup from './day2/optimisedsignup'
import Increment from './day2/day3/day3.2/createincrementbutton'
import User from './day2/day3/day3.2/objectstatefc'
import TodoApp from './day4/todoreact'
import { TodoAppV1 } from './day4/MytodoList'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoAppV1/>
    

  </React.StrictMode>
)
