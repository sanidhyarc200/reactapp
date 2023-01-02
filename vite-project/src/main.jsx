import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'

import Parentfc from './day5/Day5.2/Parent'
import { HeartFunc } from './day4/day4.2/like2'
import Todomain from './day6todoappincomponent/todoincomponent'
import MoviesList from './day7/searchbox'
import LifeCycleExample from './day7/lifecycle'
import { Task } from './day7/day7.2/apifunctionality'
import UseEffectExample from './day8/useeffect'
import UEWD from './day8/UEWD'
import UseMemoV0 from './day9'
import { Day13UseMemoExampleOneBestWay, Day13UseMemoExampleOneGoodWay } from './day10/bettercode'
import { Day13AsyncExampleBad, Day13AsyncExampleGood } from './day10/betterrenderexample'
import Day11Usecallback from './day11usecallback/example1'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Day11Usecallback/>
    

  </React.StrictMode>
)
