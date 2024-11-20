import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../services/allAPI';

function Add({setAddVideoResponse}) {

  const [videoDetails, setVideoDetails] = useState({ caption: "", imageURl: "", utubeURL: "" })
  console.log(videoDetails);


  const [show, setShow] = useState(false);

  const [invalidInputs, setinvalidInputs] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getEmbedurl = (link) => {

    if (link.includes('v=')) {
      let videoId = link.split('v=')[1].slice(0, 11)
      console.log(videoId);
      setVideoDetails({ ...videoDetails, utubeURL: `https://www.youtube.com/embed/${videoId}` })
      setinvalidInputs(false)
      

    }
    else {
      setVideoDetails({ ...videoDetails, utubeURL: "" })
      setinvalidInputs(true)
    }

  }

  const handleUpload = async () => {
    const { caption, imageURl, utubeURL } = videoDetails

    if (caption && imageURl && utubeURL) {


      try {

        const result = await addVideo(videoDetails)
        console.log(result);
        setAddVideoResponse(result.data)
        toast.success(`${result.data.caption} is added to your collection`)
        setVideoDetails({ caption: "", imageURl: "", utubeURL: "" })
        handleClose()

      }
      catch (err) {
        console.log(err);

      }


    }
    else {
      toast.warning("enter the field completely")
    }
  }


  return (
    <>
      <div className='d-flex align-items-center'>
        <h5 className='text-warning'>Add videos</h5>
        <button className='btn btn-warning ms-2' onClick={handleShow}><i className="fa-solid fa-plus fs-6" /></button>

      </div>



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          {/* videocaption */}


          <FloatingLabel controlId="floatingInputcaption" label="Video Caption" className="mb-3">
            <Form.Control type="text" placeholder="Video Caption" onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
          </FloatingLabel>



          {/* imageurl */}



          <FloatingLabel controlId="floatingPasswordImgUrl" label="Image Url" className='mb-3'>
            <Form.Control type="text" placeholder="Image Url" onChange={(e) => setVideoDetails({ ...videoDetails, imageURl: e.target.value })} />
          </FloatingLabel>



          {/* videourl */}



          <FloatingLabel controlId="floatingPasswordvideourl" label="Video Url" className='mb-3'>
            <Form.Control type="text" placeholder="Video Url" onChange={(e) => getEmbedurl(e.target.value)} />
          </FloatingLabel>


          {invalidInputs &&
            <p className='text-danger'>Invalid Url Input</p>
          }


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Add