import React from 'react'
import './Home.css'
import Inputs from './Inputs'
import { UserContext } from '../ContextDemo/ContextDemo'
import { useContext } from 'react'

const Home = () => {

    const userCtx = useContext(UserContext);
    // console.log(userCtx);

  return (
    <div className='Home_Container'>
      <h1 style={{textDecoration: 'underline'}}>My Budget Planner</h1>
      <div className='budgets'>
        <p className='bud'>Budget: Rs.2000</p>
        <p className='remain'>Remaining: Rs.2000</p>
        <p className='spant'>Spant so far:0</p>
      </div>
      <div className="main">
        <h2>Expenses</h2> <br />
        <h2 style={{color:'rgb(25,135,84)'}}>Add Data To List . . . . .</h2> <br />
        <h2>Add Expenses</h2>
      </div>
      <Inputs />
    </div>
  )
}

export default Home
