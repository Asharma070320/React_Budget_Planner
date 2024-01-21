import React, { useState } from 'react'
import './App.css'
import { UserContext } from './ContextDemo/ContextDemo'
import Home from './Component/Home'

const App = () => {

  let[data,setData]= useState([]);
  let[amount,setAmount] = useState([]);

  return (
    <div>
      <UserContext.Provider value={{data:data,setData:setData, amount:amount, setAmount:setAmount}}>
        <Home />
      </UserContext.Provider>
    </div>
  )
}

export default App
