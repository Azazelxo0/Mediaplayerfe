import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/AllApi';

export default function Watchhistory() {
  const [allHistory,setAllhistory]=useState([])
  const getWatchHistory= async()=>{
    const {data}=await getHistory();
    setAllhistory(data)
    console.log(data);
    
  }
  useEffect(()=>{
    getWatchHistory();
  },[])

  const handleDelete= async(historyId)=>{
    await deleteHistory(historyId)
    getWatchHistory();
  }
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <h3 className='textStyle'>Watch History</h3>
      <Link to='/home' style={{textDecoration:"none",color:"white",fontWeight:"750",fontSize:"15px"}}> <i class="fa-solid fa-arrow-left me-2"></i>Back to Home</Link>

    </div>
    <table className='table container mb-5 mt-5 border rounded' data-bs-theme='dark' >
      <thead>
        
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
          allHistory.length>0?
          allHistory.map((item)=>(
            <tr>
            <td>{item.id}</td>
            <td>{item.caption}</td>
            <td>{item.url}</td>
            <td>{item.timeStamp}</td>
            <td><button className='btn btn-danger' onClick={()=>handleDelete(item?.id)}><i class="fa-solid fa-trash"></i></button></td>
          </tr>

          )):
          <p className='textStyle'>No History Found</p>
        }
       
      </tbody>

    </table>
    </>
  )
}
