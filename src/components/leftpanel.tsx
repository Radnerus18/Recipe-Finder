import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { TbClockHeart } from "react-icons/tb";
import { FcBookmark } from "react-icons/fc";
import { CgNotes } from "react-icons/cg";
import { SlHandbag } from "react-icons/sl";
import { FaHamburger } from "react-icons/fa";
const Leftpanel = () => {
  return (
    <div className='leftpanel'>
      <div className="brandSection">
        <p>Brand</p>
        <button><FaHamburger /></button>
      </div>
      <button className='addRecipe_btn'>+ Add a Recipe</button>
      <div className="menu">
        <p>Menu</p>
        <ul>
          <li><RxDashboard /> <span>Dashboard</span></li>
          <li><TbClockHeart /> <span>Recently Viewed</span></li>
          <li><FcBookmark /> <span>Saved Recipes</span></li>
          <li><CgNotes /> <span>Notes</span></li>
          <li><SlHandbag /> <span>Groceries List</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Leftpanel