import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAllCategory, getVideoId, updateCategory } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Videocard from './Videocard';

export default function () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setcategoryName] = useState()
  const [allCategory, setAllcategory] = useState([])
  const handleaddcategory = async () => {
    if (!categoryName) {
      toast.warning('Please Fill the form')
    }
    else {
      let body = {
        categoryName: categoryName,
        allVideos: []
      }
      const response = await addCategory(body)
      if (response.status === 201) {
        toast.success('category added successfully ')
        handleClose()
        setcategoryName('')
        getcategory()
      }
      else {
        toast.error('something went wrong')
      }

    }

  }

  const getcategory = async () => {
    const response = await getAllCategory();
    const { data } = response;
    console.log(data);
    setAllcategory(data)
  }
  useState(() => {
    getcategory();
  }, [])

  const handleDelete= async(categoryId)=>{
    const result= await deleteCategory(categoryId)
    console.log(result);
    if(result.status===200){
      toast.success('Category Deleted')
      getcategory()
    }
    else{
      toast.error('Somthing went wrong')
    }
    
  }
  const videoDrop= async(e,id)=>{
    console.log("on drop");
    //to get video Id that we passed from video card
    const videoid=e.dataTransfer.getData('videoID')
    console.log(videoid);
    const {data}= await getVideoId(videoid)
    const selectedCategory =allCategory?.find(item=>item.id===id);
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    const response= await updateCategory(selectedCategory,id)
    getcategory()

  }
  const DragOver=(e)=>{
    //onDragover method will refresh the page,so the videoId we are passing me lost 
    e.preventDefault();

  }

  return (
    <>
      <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
      {
        allCategory?.length > 0 ?
          allCategory.map((item) => (
            <div className='m-3 border boreder-secondary rounded p-3'
            droppable onDrop={(e)=>videoDrop(e,item.id)} onDragOver={(e)=>DragOver(e)}>
              <div className='d-flex justify-content-between aling-items-center'>
                <h5 className='textStyle'>{item.categoryName}</h5>
                <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><i class="fa-solid fa-trash  " ></i></button>

              </div>
              {
                item.allVideos.length>0?
                item.allVideos?.map(card=>(
                  <Videocard displayVideo={card}/>

                ))
                
                :<p>Nothing to display</p>
              }

            </div>

          ))
          : <p>No category found</p>


      }
      <Modal show={show} onHide={handleClose} data-bs-theme='dark' >
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title ><i class="fa-solid fa-list text-warning me-3"></i><span className='textStyle'>Add Category</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark '>
          <p className='textStyle' style={{ fontWeight: "700" }}>Please fill the form</p>
          <Form className='p-4 border border-2 border-secondary rounded' data-bs-theme='light'>
            <Form.Group className="mb-3" >

              <Form.Control type="text" placeholder="Enter Category Name"
                onChange={(e) => setcategoryName(e.target.value)} />

            </Form.Group>




          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="warning" onClick={handleaddcategory}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}
