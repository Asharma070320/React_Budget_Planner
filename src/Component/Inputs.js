import React, { useState } from 'react'
import './Inputs.css'
import { UserContext } from '../ContextDemo/ContextDemo'
import { useContext } from 'react'
import Aside from './Aside'

const Inputs = () => {

    const userCtx = useContext(UserContext);
    console.log(userCtx);

    let[text,setText] = useState("");
    const getTextValue = (e) => {
        setText(e.target.value);
    }
    let[number,setNumber] = useState(0);
    const getNumValue = (e) =>{
        setNumber(e.target.value);
    } 

    const clickBtn = () => {
        userCtx.setData(prevData => [...prevData,text] )
        userCtx.setAmount(prevNum => [...prevNum,number])
    }

    // console.log(text,number);

  return (
    <>
    <div className='input_Container'>
      <div className="first">
        <span>Name</span> <br />
        <input type="text" onChange={getTextValue} />
      </div>
      <div className="second">
        <span>Cost</span> <br />
        <input type="number" onChange={getNumValue} />
      </div>
    </div>
    <button onClick={clickBtn}>Save</button>
    <Aside />
    </>
  )
}

export default Inputs
