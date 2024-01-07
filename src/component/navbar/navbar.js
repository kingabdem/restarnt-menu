import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./StyleNavbar.css";
import { useState } from 'react';

function NavbarSite({searchTerm}) {
  const [searchText,setSearchText] = useState("");
  

  function HandleClick(e){
    e.preventDefault();
    searchTerm(searchText);
    setSearchText("");
  }

  return (
    <Navbar expand="lg" className="navbarSite bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><i className="fa-solid fa-pizza-slice mx-2"></i>    <span className='mx-2'>Food menu</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              aria-label="Search ..."
              style={{borderRadius:'0px'}}
              onChange={(e)=>{setSearchText(e.target.value)}}
              value={searchText}
            />
            <Button onClick={HandleClick} style={{borderRadius:'0px',background:"#1ABC9C",border:"none"}}>Search</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSite;