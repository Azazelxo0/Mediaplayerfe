import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //state to store all form field values 

  const [videoDetails, setvideoDetails] = useState({
    caption: '',
    imageUrl: '',
    youtubeLink: ''
  })

  const addvideoDetails = async () => {
    const {  caption, youtubeLink } = videoDetails
    if ( !caption  || !youtubeLink) {
      toast.warning('Please Fill the form completely')
    }
    else {
      console.log(videoDetails);
      const response = await uploadVideo(videoDetails);
      console.log(response);
      if(response.status===201){
        setUploadVideoStatus(response.data)
       toast.success(`${response.data.caption} Successfully uploaded`)
        handleClose();
        setvideoDetails({
          caption: '',
          
          youtubeLink: ''
        })

      }
      else{
        toast.error('Something went worng')
      }
    }


  }

  const getEmbededLink = (data) => {
    const link = `https://www.youtube.com/embed/${data.slice(-11)}`
    console.log(link);
    let image_url=`http://img.youtube.com/vi/${data.slice(-11)}/hqdefault.jpg`
    setvideoDetails({ ...videoDetails, youtubeLink: link ,imageUrl: image_url})
    


  }

  return (
    <>
      <div className='d-flex aling-items-center '>
        <h5 className='textStyle'>
          Upload A New Video
        </h5>
        <button className='me-3 btn' style={{ color: "white" }} onClick={handleShow}>
          <i class="fa-solid fa-cloud-arrow-up fs-5 " ></i>
        </button>
      </div>
      <Modal show={show} onHide={handleClose} data-bs-theme='dark' >
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title ><i class="fa-solid fa-film text-warning me-3"></i><span className='textStyle'>Upload Video</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark '>
          <p className='textStyle' style={{ fontWeight: "700" }}>Please fill the form</p>
          <Form className='p-4 border border-2 border-secondary rounded' data-bs-theme='light'>
            
            <Form.Group className="mb-3">

              <Form.Control type="text" placeholder="Enter Video Caption"
                onChange={(e) => setvideoDetails({ ...videoDetails, caption: e.target.value })} />

            </Form.Group>

            <Form.Group className="mb-3" >

              <Form.Control type="text" placeholder="Enter Video Youtube Link"
                onChange={(e) => getEmbededLink(e.target.value)} />

            </Form.Group>



          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="warning" onClick={addvideoDetails}>
            UPLOAD
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <ToastContainer /> */}

    </>
  )
}
