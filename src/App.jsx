import { useState } from 'react'
import './App.css'
import {Form, Input, Select, SelectItem, Checkbox, Button} from "@heroui/react";
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='scroll-smooth'>
      <Home/>
    </div>
  )
}

export default App
