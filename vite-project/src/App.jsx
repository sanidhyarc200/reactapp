
import { useState } from 'react';
import './App2.css'
import Header from './darkmodelightmode/header'
import Hero from './darkmodelightmode/Hero'

export const ThemeContext = react.createContext({});

function App() {
  const  [theme, setTheme] = useState('light');
  

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div>
      <Header/>
      <Hero />
    </div>
    </ThemeContext.Provider> 
  )
}

export default App;
