import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div>
       <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="" style={{color:"white", fontSize:"25px"}}>
            <Link to='/' style={{textDecoration:"none",color:"white"}}>
            <i class="fa-solid fa-video text-warning me-3"></i>
           Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
