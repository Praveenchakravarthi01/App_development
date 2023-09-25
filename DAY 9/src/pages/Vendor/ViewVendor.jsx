import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVendors, removeVendor } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom';
// import logo from '../../assets/Images/Dasboard/logo.svg'

const ViewVendor = () => {

    const vendors = useSelector(getVendors);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    return (



        <div>
            <button onClick={() => navigate('/addVendor')}>Add Vendor</button>
            <table>
                <tr>
                    <th>Vendor Name</th>
                    <th>Company Name</th>
                    <th>email</th>
                    <th>Service</th>
                    <th>Action</th>
                </tr>
                {vendors?.map((vendor, i) => {
                    return (<tr>
                        <td>{vendor?.vendorName}</td>
                        <td>{vendor?.companyName}</td>
                        <td>{vendor?.email}</td>
                        <td>{vendor?.service}</td>
                        <td onClick={() => dispatch(removeVendor(i))}>delete</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default ViewVendor