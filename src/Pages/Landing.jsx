import React from 'react'
import landingImg from '../assets/33a46f727dbe790d436616a1f56fce9c.gif'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './Landing.css'





function Landing() {
  return (
    <>

      <div className='container-fluid d-flex align-items-center nm' style={{ height: "80vh" }}>

        <Row>
          <Col className='p-5' md={6} sm={12}>

            <h2 className=''>
              <span className='text-primary'> <i className="fa-solid fa-circle-play me-2" ></i></span>
              Welcome to <span className='text-warning'>Media Player</span>
            </h2>
            <p style={{ textAlign: "justify" }} className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non quae molestias rerum facere est,
              illo aut doloribus laboriosam exercitationem
              id quod architecto eos. Ratione ex dolor saepe quas sit!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto fuga eveniet, vel ea adipisci tempore qui soluta cupiditate possimus totam voluptates labore harum fugit, itaque ut tempora provident similique aperiam.</p>
            <div className='d-grid'>
              <Link to={'/home'} className='btn btn-warning'>Let's Start</Link>
            </div>

          </Col>


          <Col className='py-4 d-flex justify-content-center align-items-center' md={6} sm={12}>
            <img src={landingImg} alt="landing_img" className='img-fluid rounded' />
          </Col>

        </Row>

      </div>





      {/* features  */}




      <div className='container-fluid my-5 p-3 '>

        <h2 className='text-center my-5'>Features</h2>


        <Row className='justify-content-around'>
          <Col sm={12} md={3} className='d-flex justify-content-center align-items-center'>


            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://gifyard.com/wp-content/uploads/2023/03/GIF-Player.gif" height={'200px'} />
              <Card.Body>
                <Card.Title>Managing videos</Card.Title>
                <Card.Text>
                  User can upload view and remove the videos
                </Card.Text>

              </Card.Body>
            </Card>




          </Col>
          <Col sm={12} md={3} className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.tenor.com/jpyjXynxdokAAAAM/music-cute.gif" height={'200px'} />
              <Card.Body>
                <Card.Title>Categorize Videos</Card.Title>
                <Card.Text>
                  Users can categorize videos by drag and drop features
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>


          <Col sm={12} md={3} className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.tenor.com/Bcv5Z_ewALEAAAAM/jim-carrey-delete.gif" height={'200px'} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>




      {/* <div className='container-fluid p-5 my-5'>
        <Row className='border shadow p-5 d-flex align-items-center justify-content-center'>
          <Col sm={12} md={6}>
            <h3 className='text-warning'>Simple Fast and Powerful</h3>
            <p> <span className='fs-4 text-primary'>Play Everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur expedita assumenda corporis reiciendis dicta ipsum deserunt explicabo, molestias fuga
              recusandae consequuntur ducimus impedit ad dolorem illo earum pariatur odio iure?</p>

            <p> <span className='fs-4 text-primary'>Categorize Videos :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur expedita assumenda corporis reiciendis dicta ipsum deserunt explicabo, molestias fuga
              recusandae consequuntur ducimus impedit ad dolorem illo earum pariatur odio iure?</p>

            <p> <span className='fs-4 text-primary'>Manage History :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur expedita assumenda corporis reiciendis dicta ipsum deserunt explicabo, molestias fuga
              recusandae consequuntur ducimus impedit ad dolorem illo earum pariatur odio iure?</p>
          </Col>
          <Col sm={12} md={6} className='text-center'>
            <iframe  src="https://www.youtube.com/embed/F_aL1IGzCSo?si=ThbNnKeY-vk0VtYN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='img-fluid frame'></iframe>
          </Col>
        </Row>
      </div> */}


     <div className='p-5 my-5'>
      <Row>
        <Col sm={12} md={7}>
        <h4>Simple And Faster</h4>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident omnis sit non, itaque maiores quasi voluptate magnam nisi at et. Non aliquid voluptatum animi fugit corrupti facilis alias incidunt nemo?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum dolorem nisi recusandae rerum numquam, totam inventore natus, labore optio exercitationem tempora dolore mollitia, nostrum et nulla voluptate nesciunt. A.  
        </p>
        </Col>
        <Col sm={12} md={5} className='text-center'>
        <iframe width="400" height="315" src="https://www.youtube.com/embed/pxCWiYFkvTg?si=vFkEOtXT_7s9A4Fn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='img-fluid'></iframe>
        </Col>
      </Row>
     </div>



    </>
  )
}

export default Landing