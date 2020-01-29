import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const setDate = date => {
    var dateVar = new Date(date);
    return dateVar.toLocaleDateString();
}
const FarmersList = () => {
    const [ list, setList ] = useState(null);
    var [ page, setPage ] = useState(1);

    const handleChange = (e) => {
        const {value} = e.target;
        setPage(value);
    }

    useEffect(() => {
        axios.get(`https://theagromall.com/api/v2/get-sample-farmers?limit=100&page=${page}`).then((response) => setList(response.data.data));
      }, [page]);
      console.log(list);
  
    return (
    <div className="p-4 w-full" >
        <h4 className="text-2xl">Farmers</h4>
        <div className="inline-flex my-4 w-full items-center">
            <p className="w-1/4 mr-2 text-sm">Showing <span className="text-customBlue">{list && list.farmers.length}</span> {list && list.totalRec > 0 && `out of ${list.totalRec} farmers`}</p>
            <div className="w-1/3 border-b border-grey-400 inline-flex items-center mr-4">
                <FontAwesomeIcon className="text-custom-grey-800" icon={faSearch} />
                <input className="w-full"/>
            </div>
        </div>
        <table className="w-full">
            <tr style={{ backgroundColor: "#EAEEF0", color: "#7F8FA4"}} className="font-light">
                <th >Name</th>
                <th className="py-2 px-10">Phone number</th>
                <th className="px-10">Sex</th>
                <th className="px-10">State</th>
                <th className="px-10 text-left">Marital Status</th>
                <th className="px-10 text-left">DoB</th>
            </tr>
            <tbody>
                {
                    list && list.farmers.map(item => (
                        <tr key={item.farmer_id} className="border-b border-grey-500 text-sm bg-white">
                        <td className="flex items-center px-10 py-5">
                            <p 
                                className="rounded-full bg-grey-800 text-center text-white flex items-center justify-center mr-6" 
                                style={{width: 40, height: 40}}>
                                {item.itemLogo}
                            </p>{item.first_name} {item.middle_name} {item.surname}</td>
                        <td className="px-10"><p className="text-center">{item.mobile_no}</p></td>
                        <td className="px-10">{item.gender}</td>
                        <td className="px-10">{item.state}</td>
                        <td className="px-10">
                        {item.marital_status}
                        </td>
                        <td>
                        {setDate(item.dob)}
                        </td>
                    </tr>     
                    ))
                }
            </tbody>
        </table>
        <div className="flex">
            <label htmlFor="page">Page:</label>
            <input name="page" className="w-12 text-end" onChange={handleChange} value={page} type="text"/>
        </div>
    </div>
)}

export default FarmersList;