import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'

import { useEffect } from 'react'
import { addVideo, getAllVideos, getSingleCategory, updateCategory } from '../services/allAPI'



// import { all } from 'axios'


function View({addVideoResponse,videoDeleteResponsefromCategory,setvideoDeleteResponsefromCategory,setdeleteVideofromViewResponse}) {

const [allVideos,setAllVideos]=useState([])

const [Deletevideo,setDeleteVideo]=useState({})

useEffect(() => {

  Allvideos()
  
}, [addVideoResponse,Deletevideo,videoDeleteResponsefromCategory])


const Allvideos=async()=>{
  try{
    const result = await getAllVideos()
    console.log(result.data);
    if(result.status>=200 && result.status<300){

      setAllVideos(result.data)
      // console.log(allVideos);
      
    }
    

  }
  catch(err){
    console.log(err);
    
  }
}

const dragOverView=(e)=>{
  e.preventDefault()
}

const handleCategoryvideo=async(e)=>{
  const {videoDetails,categoryId}=JSON.parse(e.dataTransfer.getData("shareData"))
  console.log(videoDetails,categoryId);


  try{
    const {data}=await getSingleCategory(categoryId)
    console.log(data);

    const selectedCategoryVideoList=data.allvideos.filter(video=>video.id!=videoDetails.id)
    console.log(selectedCategoryVideoList);


    const {id,categoryName}=data

    const categoryResult=await updateCategory(categoryId,{id,categoryName,allvideos:selectedCategoryVideoList})
    console.log(categoryResult);
    setdeleteVideofromViewResponse(categoryResult.data)
    await addVideo(videoDetails)
   
   
    Allvideos()

    
    
    

  }
  catch(err){
    console.log(err);
    
  }
  
}


  return (
    <>
    <Row className='border border-3 p-5' droppble={true} onDragOver={(e)=>dragOverView(e)} onDrop={(e)=>handleCategoryvideo(e)}>
      {
        allVideos.length>0?
      allVideos?.map(video=>(
        <Col key={video?.id} lg={4} md={3} sm={12} className=''>
        <VideoCard displyData={video} setDeleteVideo={setDeleteVideo}/>
        </Col>
      )
        )
      :
      <div className='text-danger fw-bold fs-3'>Nothing to disply</div>
      }
    </Row>
    </>
  )
}

export default View