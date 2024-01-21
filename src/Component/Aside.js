import React from 'react'
import { UserContext } from '../ContextDemo/ContextDemo'
import { useContext } from 'react'
import './Aside.css'

const Aside = () => {

    const userCtx = useContext(UserContext);
    // console.log(userCtx);
  return (
    <div className='Aside_Container'>
     <div className="center">
    {
        userCtx.data.map((lists,index)=> {
            return <div className='update'>
                <h1>Name : - {lists}</h1>
                <h1>Costs : - {userCtx.amount[index]}</h1>
            </div>
        })
    }
     </div>
    </div>
  )
}

export default Aside
