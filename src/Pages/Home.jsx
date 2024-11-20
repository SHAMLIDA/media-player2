import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import View from '../Components/View'
import Category from '../Components/Category'
import { useState } from 'react'



function Home() {


  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [videoDeleteResponsefromCategory,setvideoDeleteResponsefromCategory]=useState("")


  const [deleteVideofromViewResponse,setdeleteVideofromViewResponse]=useState("")


  return (
    <>

      {/* <div className="container d-flex justify-content-between my-5">
        
        <Add />
        <Link to={'/history'} className='text-primary fw-bold fs-5' style={{ textDecoration: "none" }}>Watch History</Link>

      </div>  */}


      <Row className='justify-content-evenly my-5'>
        <Col md={4} sm={12} className='text-center p-3'>
        <Add setAddVideoResponse={setAddVideoResponse} />
        </Col>
        <Col md={4} sm={12}  className='text-center p-3'>
        <Link to={'/history'} className='text-primary fw-bold fs-5' style={{ textDecoration: "none" }}>Watch History</Link>
        </Col>
      </Row>

      <div className='container my-5'>

      <Row >
        <Col lg={6}>
          <View addVideoResponse={addVideoResponse} videoDeleteResponsefromCategory={videoDeleteResponsefromCategory} setvideoDeleteResponsefromCategory={setvideoDeleteResponsefromCategory} setdeleteVideofromViewResponse={setdeleteVideofromViewResponse}/>
        </Col>
        <Col lg={6} className='text-center'>
          <Category setvideoDeleteResponsefromCategory={setvideoDeleteResponsefromCategory} deleteVideofromViewResponse={deleteVideofromViewResponse} />
        </Col>
      </Row>

      </div>



    </>
  )
}

export default Home