import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Thali from './Pages/Thali'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Thali />
    </div>
  )
}

export default App
