import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'
import Topbar from '../../components/Topbar'
import Leftbar from '../../components/Leftbar'
const Vendor = () => {
  
  return (
    <>
      <Leftbar />
      <Topbar title='Vendors'/>
      <div className="pt-20 z-50 pl-80">
        <div className="flex-col pt-[70px] items-center">
            <span className='text-black text-4xl pl-[80px]'>No Vendors available</span>
            <img className='w-1/2' src="https://thumbs.dreamstime.com/z/documentation-paper-earth-icon-element-no-government-organisation-white-background-166294266.jpg?w=768" alt="" />
        </div>
      </div>
    </>
  )
}

export default Vendor