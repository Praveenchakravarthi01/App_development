import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import { MdCircleNotifications } from 'react-icons/md'


function Topbar({ title = "Header" }) {
    const user = useSelector(selectUser)

    return (
        <>
            <div className='topbar bg-backgroundwhite h-16 justify-between  flex  items-center fixed w-[80%] right-0'>
                <p className='text-2xl mx-10 font-dmsans font-semibold'>
                    {title}
                </p>
                <div className="mx-10 relative">
                    <p>
                        <MdCircleNotifications className='text-3xl' />
                        <span className='absolute right-0 h-2 w-2 bg-red animate-ping rounded-full top-0'></span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Topbar