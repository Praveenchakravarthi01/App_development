import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVendors, removeVendor, selectUser } from '../../redux/userSlice'
import { useNavigate } from "react-router-dom"
import Topbar from '../../components/Topbar'
import Leftbar from '../../components/Leftbar'
const Vendor = () => {
  const vendors = useSelector(getVendors);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Leftbar />
      <Topbar title='Vendors' />
      <div className="pt-20 z-50 pl-80">
        <div className=" pb-10 flex-col pt-[70px] flex  justify-center">
          {/* <span className='text-black text-4xl pl-[80px]'>No Vendors available</span>
            <img className='w-1/2' src="https://thumbs.dreamstime.com/z/documentation-paper-earth-icon-element-no-government-organisation-white-background-166294266.jpg?w=768" alt="" /> */}
          <div className=" text-end flex justify-end mb-10 pr-10">
            <button className='h-12 w-[120px] border-2 text-lg flex justify-center pt-2 rounded-lg border-[#6c6a72] hover:bg-[#a13dff] bg-opacity-15' onClick={() => navigate('/addVendor')}>Add Vendor</button>
          </div>
          <table>
            <tr>
              <th className='text-start'>Vendor Name</th>
              <th className='text-start'>Company Name</th>
              <th className='text-start'>email</th>
              <th className='text-start'>Service</th>
              <th className='text-start'>Action</th>
            </tr>
            {vendors?.map((vendor, i) => {
              return (<tr>
                <td>{vendor?.vendorName}</td>
                <td>{vendor?.comapanyName}</td>
                <td>{vendor?.email}</td>
                <td>{vendor?.service}</td>
                <td onClick={() => dispatch(removeVendor(i))}>delete</td>
              </tr>
              )
            })}
          </table>

        </div>
      </div>
    </>
  )
}

export default Vendor