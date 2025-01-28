import React from 'react'
import { useDispatch } from 'react-redux';
import { addCusine,addDiet } from '../redux/features/recepi.ts';
import Chat from './chat.tsx';
const Rightpanel = () => {
  const dispatch = useDispatch()
  const cuisine:any = [
    "American",
    "Italian",
    "Mexican",
    "Chinese",
    "Indian",
    "Japanese",
    "Thai",
    "Caribbean",
    "Korean",
  ]
  const diet:any = [
    'Veg','Non-Veg','Keto','Vegan'
  ]
  return (
    <div className='rightPanel'>
        <h2>Select Cuisine</h2>
      <div className="cuisineSection">
        {
          cuisine.map((e,i)=><div key={i} onClick={()=>dispatch(addCusine(' '+e))}>{e}</div>)
        }
    </div>
      <h2>Select Diet</h2>
    <div className="dietSection">
      {
        diet.map((e,i)=><div key={i} onClick={()=>dispatch(addDiet(e))}>{e}</div>)
      }
    </div>
    <Chat/>
    </div>
  )
}

export default Rightpanel