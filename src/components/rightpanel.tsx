import { Card } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCusine,addDiet } from '../redux/features/recepi.ts';
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
          cuisine.map((e,i)=><div onClick={()=>dispatch(addCusine(' '+e))}>{e}</div>)
        }
    </div>
      <h2>Select Diet</h2>
    <div className="dietSection">
      {
        diet.map((e,i)=><div onClick={()=>dispatch(addDiet(e))}>{e}</div>)
      }
    </div>
    </div>
  )
}

export default Rightpanel