import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Videocard({displayVideo,setdeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    const today = new Date;
    const timeStamp = new Intl.DateTimeFormat('en-US', {
    year:'numeric',
    month:'2-digit',
    day:'2-digit',
    hour:"2-digit",
    second:'2-digit'
    }).format(today);
    console.log(timeStamp);

    const reqBody ={
      url:displayVideo.youtubeLink,
      caption:displayVideo.caption,
      timeStamp:timeStamp
    }
    await addToHistory(reqBody)
     setShow(true);
  }  
  const deleteVideoItem = async(id)=>{
    const response = await deleteVideo(id)
    if(response.status==200){
      setdeleteVideoStatus(true)
      console.log('Successfully deleted');
      
    }
  }
  const dargStarted=(e,id)=>{
    e.dataTransfer.setData('VideoId',id)
    
    
  
  }
  return (
    <>
     <Card style={{ width: '100%',height:"350px" }} data-bs-theme='dark'
      draggable onDragStart={(e)=>dargStarted(e,displayVideo.id)}>
      <Card.Img variant="top" src={displayVideo.imageUrl}
      height='250px' width='100%' style={{padding:"5px"}} onClick={handleShow}/>
      <Card.Body>
       <div className='d-flex justify-content-between'>
       <Card.Title>{displayVideo.caption}</Card.Title>
        
        <Button variant="danger " onClick={()=>deleteVideoItem(displayVideo.id)}><i class="fa-solid fa-trash  " ></i></Button>
       </div>
      </Card.Body>
    </Card>
    <Modal 
    data-bs-theme='dark'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="448" src={`${displayVideo.youtubeLink}`} title="Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share"
         referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
      
    
    </>
  )
}
