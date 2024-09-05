import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Landingpage() {
  return (
    <div>
      <Container className='mt-5 mb-5 d-flex aling-items-center justify-content-evenly w-100'>
        <Row>
          <Col>
            <h3 className='textStyle'>Welcome To <span style={{ color: "orange" }}>Media Player</span></h3>
            <p className='textStyle' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quam nesciunt, beatae eius inventore tempore aut dolorum error, ut voluptatem,
              ea unde in libero dolor? Consequatur repellat nobis perferendis eos soluta. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore velit consectetur
              eum rerum numquam delectus odit necessitatibus nam corporis?
              Provident assumenda eveniet id! Aperiam accusantium voluptatem ab ipsum vitae!</p>
            <Link to='/home'>
              <button className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right ms-2"></i></button>
            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5' height={'300px'} />
          </Col>
        </Row>
      </Container>
      <div className='container mt-5 mb-5'>
        <h3 className='textStyle mb-5'>
          Features
        </h3>
        <div className='cards d-flex aling-items-center justify-content-evenly'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" height={'250px'} />
            <Card.Body className='bg-dark'>
              <Card.Title className='textStyle'>Card Title</Card.Title>
              <Card.Text className='textStyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" height={'250px'} />
            <Card.Body className='bg-dark'>
              <Card.Title className='textStyle'>Card Title</Card.Title>
              <Card.Text className='textStyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" height={'250px'} />
            <Card.Body className='bg-dark'>
              <Card.Title className='textStyle'>Card Title</Card.Title>
              <Card.Text className='textStyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>

        </div>
      </div>
      <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-4 '>
        <Row>
          <Col className='textStyle'>
          <h3 style={{color:"orange",marginBottom:"30px"}} >Simple and Powerfull</h3>
          <p><span className='fs-5'  style={{color:"orange"}}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Vero, itaque quo quia nisi consectetur molestiae illo eveniet odio minus accusamus
           dolores voluptatibus quidem suscipit laudantium et rem adipisci facilis repudiandae.</p>
           <p><span className='fs-5'  style={{color:"orange"}}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Vero, itaque quo quia nisi consectetur molestiae illo eveniet odio minus accusamus
           dolores voluptatibus quidem suscipit laudantium et rem adipisci facilis repudiandae.</p>
           <p><span className='fs-5'  style={{color:"orange"}}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Vero, itaque quo quia nisi consectetur molestiae illo eveniet odio minus accusamus
           dolores voluptatibus quidem suscipit laudantium et rem adipisci facilis repudiandae.</p>

          </Col>
          <Col>
          <div className='m-4'>
          <iframe width="700" height="400" src="https://www.youtube.com/embed/RLzC55ai0eo" title="Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          
          </Col>
        </Row>
      </div>
    </div>
  )
}
