import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCategory, handleCategory, updateCategory } from '../services/allAPI';
import { deletecat } from '../services/allAPI';
import { getSingleVideo } from '../services/allAPI';
import VideoCard from './VideoCard';
import { deleteVideo } from '../services/allAPI';




function Category({ setvideoDeleteResponsefromCategory, deleteVideofromViewResponse }) {

  useEffect(() => {

    getCat()



  }, [deleteVideofromViewResponse])







  const [show, setShow] = useState(false);

  const [Categoryname, setCategoryName] = useState("")
  console.log(Categoryname);


  const [displyCategory, setdisplyCategory] = useState([])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  const getCat = async () => {
    try {
      const result = await getCategory()
      // console.log(result);
      setdisplyCategory(result.data)
      console.log(displyCategory);
    }
    catch (err) {
      console.log(err);



    }



  }


  const handelAddCategory = async () => {
    if (Categoryname) {
      //do api call
      try {
        const result = await handleCategory({ Categoryname, allvideos: [] })
        console.log(result);
        getCat()
        toast.success("New Category list added")
        setCategoryName("")
        handleClose()
      }
      catch (err) {
        console.log(err);

      }

    }
    else {

      toast.warning("enter the category name")

    }
  }



  const delcate = async (id) => {
    try {
      await deletecat(id)
      getCat()
      toast.warning("You have deleted a category list ")
    }

    catch (err) {
      console.log(err);

    }

  }

  const videoDropped = async (e, categoryId) => {

    console.log(`video dropped in category id ${categoryId}`);

    const videoId = e.dataTransfer.getData("videoId")
    console.log(`drag started with video id : ${videoId} and dropped in category id : ${categoryId}`);

    const { data } = await getSingleVideo(videoId)
    console.log(data);
    const selectCategory = displyCategory.find((item) => item.id == categoryId)

    selectCategory.allvideos.push(data)
    console.log(selectCategory);
    await updateCategory(categoryId, selectCategory)



    getCat()
    const result = await deleteVideo(videoId)
    setvideoDeleteResponsefromCategory(result.data)

  }

  const dragOverStart = (e) => {
    e.preventDefault()
  }


  const dragoverStarted = (e) => {
    e.preventDefault()

  }

  const dragStarted = (e, videoDetails, categoryId) => {

    const shareData = { videoDetails, categoryId }
    console.log(shareData);
    e.dataTransfer.setData("shareData", JSON.stringify(shareData))


  }







  return (
    <>
      <div className='d-flex justify-content-center align-items-center p-5'>
        <h5 className='text-warning'>All Category</h5>
        <button className='btn btn-warning ms-2' onClick={handleShow}><i className="fa-solid fa-plus fs-6" /></button>


      </div>
      <div className='container-fluid mt-3'>
        {
          displyCategory.length > 0 ?

            displyCategory?.map((item) => (

              <div droppable={true} onDrop={(e) => videoDropped(e, item.id)} onDragOver={(e) => dragOverStart(e)} className='border border-3 border-light mb-3 d-flex justify-content-between p-3'>
                <div className=''>

                  <h5>{item?.Categoryname}</h5>
                  <button className='btn' onClick={() => delcate(item?.id)}><i className="fa-solid fa-trash" style={{ color: "#c61906", fontSize: "20px" }} /></button>
                </div>

                <div className="row mt-5 p-5">
                  {
                    item.allvideos.length > 0 &&

                    item.allvideos?.map(video => (
                      <div draggable={true} droppable={true} onDragStart={(e) => dragStarted(e, video, item.id)} onDragOver={e => dragoverStarted(e)} className="col-lg-6">

                        <VideoCard displyData={video} insidecategory={true} />

                      </div>
                    ))
                  }
                </div>


              </div>






            ))

            :

            <div className='text-danger'>No Category added</div>
        }

      </div>



      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>

        <div className='p-2'>

          <FloatingLabel controlId="floating" label="Enter Category Name" className="mb-3">
            <Form.Control type="text" placeholder="" onChange={(e) => setCategoryName(e.target.value)} />
          </FloatingLabel>

        </div>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer position="top-right" autoClose={3000} theme="colored" />



    </>
  )
}

export default Category