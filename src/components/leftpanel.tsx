import React from 'react'
import { MdDashboardCustomize } from "react-icons/md";
import { TbClockHeart } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { SlHandbag } from "react-icons/sl";
import { GrFavorite } from "react-icons/gr";
import { LuCookingPot } from "react-icons/lu";
import { RiSettingsLine } from "react-icons/ri";
import { FaSignOutAlt } from 'react-icons/fa';
const Leftpanel = () => {
  return (
    <div className='leftpanel'>
      <div className="brandSection">
        <h1>Brand</h1>
        {/* <button><FaHamburger /></button> */}
      </div>
      <button className='addRecipe_btn'>+ Add a Recipe</button>
      <div className="menu">
        <ul>
          <li><MdDashboardCustomize /> <span>Dashboard</span></li>
          <li><TbClockHeart /> <span>Recently Viewed</span></li>
          <li><FaRegBookmark /> <span>Saved Recipes</span></li>
          <li><CgNotes /> <span>Notes</span></li>
          <li><SlHandbag /> <span>Groceries List</span></li>
        </ul>
      </div>
      <div className='menu2'>
          <ul>
            <li><GrFavorite /> <span>My Favroites</span></li>
            <li><LuCookingPot /><span>Plans</span></li>
            <li><RiSettingsLine /><span>Settings</span></li>
          </ul>
          <button className="logout_btn">
            <span className="icon">
              <FaSignOutAlt size={20} /> {/* Render the icon with size 20 */}
            </span>
            Logout
          </button>
      </div>
    </div>
  )
}

export default Leftpanel