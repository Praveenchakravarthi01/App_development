import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'
import Topbar from '../../components/Topbar'
import Leftbar from '../../components/Leftbar'
const Dashboard = () => {

  const user = useSelector(selectUser)

  return (
    <>
      <Leftbar />
      <Topbar title='Dashboard' />
      <div className="pt-20 z-50 pl-80">
        <div className="flex pt-[70px] justify-evenly items-center">
          <img className='h-80 w-96' src="https://www.researchgate.net/publication/361753261/figure/fig3/AS:11431281092644243@1666922903968/Comparison-graph-for-execution-time-using-a-variable-number-of-VMs.png" alt="" />
          <img className='w-1/2' src="https://www.smartsheet.com/sites/default/files/2021-06/IC-Vendor-Program-Maturity-Scoring-Results.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Dashboard

