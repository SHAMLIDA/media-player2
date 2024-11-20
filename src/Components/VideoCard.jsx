import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { deleteVideo } from '../services/allAPI';
import { saveHistory } from '../services/allAPI';



function VideoCard({ displyData, setDeleteVideo,insidecategory }) {


  console.log(displyData);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {

    let { caption, utubeURL } = displyData

    const localTime = new Date()
    // console.log(localTime);

    const formatteddate = localTime.toLocaleString();
    console.log(formatteddate);

    let SaveHistory = { caption, utubeURL, formatteddate }


    try {
     await saveHistory(SaveHistory)

    }
    catch(err){
      console.log(err);
      
    }
   
    setShow(true);
  }


  const handleRemoveVideo = async (videoid) => {

    try {
      const result = await deleteVideo(videoid)
      console.log(result);
      setDeleteVideo(result)
    }
    catch (err) {
      console.log(err);

    }



  }


  const dragStarted=(e,videoid)=>{

    console.log(`drag started with videoID ${videoid}`);
    e.dataTransfer.setData("videoId",videoid)
    

  }



  return (
    <>
      <Card style={{ width: '100%', height: "100%"  }}  className='mb-2' draggable={true} onDragStart={(e)=>dragStarted(e,displyData.id)}>
        <Card.Img   style={{ height: '200px', padding: '3%' }} variant="top" onClick={handleShow} src={displyData?.imageURl} />
        <Card.Body>
          <Card.Title className=''>
            <p className=''>{displyData?.caption}</p>
            {
              !insidecategory &&
              <button className='btn' onClick={() => handleRemoveVideo(displyData?.id)}><i className="fa-solid fa-trash fs-5" style={{ color: "#f10909", }} /></button>

            }
          </Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displyData?.caption} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="720" src={`${displyData?.utubeURL}?autoplay=1`} title="Squid Game: Season 2 | Official Teaser | 
          Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>

      </Modal>



    </>
  )
}

export default VideoCard