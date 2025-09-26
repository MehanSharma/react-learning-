import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conditional from './Topics/Conditional'
import Props from './Topics/Props'
import Events from './Topics/Events'
import Forms from './Topics/Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Conditional/> */}
      {/* <Props/> */}
      {/* <Events/> */}
      {/* <renderer/> */}
      <Forms/>
    </>
  )
}

export default App
