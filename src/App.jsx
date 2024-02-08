import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import { NotificationContextProvider } from './store/NotificationContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NotificationContextProvider>
      <Home />
    </NotificationContextProvider>
    </>
  )
}

export default App
