import React,{Component} from "react"
import {Navbar,Nav,NavDropdown,Carousel,Alert,Card,Container,Row,Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import image from "./images/e.png"
import image2 from "./images/a.png"
import image3 from "./images/b.png"
import image4 from "./images/c.png"



class Home extends Component{
    constructor(props)
    {
        super(props)
        this.logout=this.logout.bind(this)
        this.state ={
            
        }
    }
    logout(e)
  {

     e.preventDefault()
    
      
       localStorage.removeItem('key')
      this.props.history.push('/')
     
      
      
     
 }
    
render()
{
    return(
        <>
       
        
  <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="">SHOPMART</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <NavDropdown title="Products" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link  to="/cloth"> Clothes</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link  to="/laptop"> Laptops</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link  to="/mobile"> Mobiles</Link></NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        {/* <NavDropdown.Divider /> */}
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
        {localStorage.getItem("key")?"":
        
         
    <Nav.Link ><Link to="/regis">REGISTER</Link></Nav.Link>}  
    {localStorage.getItem("key")?<Nav.Link href="#deets" onClick={this.logout}>LOGOUT</Nav.Link>:
        
         
        <Nav.Link ><Link to="/login">LOGIN</Link></Nav.Link>}                                                    }
    </Nav>
  </Navbar.Collapse>
</Navbar>
{localStorage.getItem("key")?
        
         
         
<Alert   variant="success" className="mt-2">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
  You are Signed In..Now enjoy wonderful offer in the deals this summer.
  </p>
  
</Alert>:<Alert variant="success" className="mt-2">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
  Sign In to buy the best deals.... Sale Sale Sale
  </p>
  
</Alert>}

<div className="container mt-1">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
</div>
<hr/>
<Container>
  
  <Row>
 
<Col sm>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image2} />
  <Card.Body>
    <Card.Title>Clothes</Card.Title>
    <Card.Text>
      Some of the best quality products with best prices
    </Card.Text>
    <Link className="btn btn-primary btn-raised" to="/cloth">Go To clothes</Link>
  </Card.Body>
</Card>
</Col>
<Col sm>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image3} />
  <Card.Body>
    <Card.Title>Laptop</Card.Title>
    <Card.Text>
    Some of the best quality products with best prices
    </Card.Text>
    <Link className="btn btn-primary btn-raised" to="/laptop">Go To laptops</Link>
  </Card.Body>
</Card>
</Col>
<Col sm>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image4} />
  <Card.Body>
    <Card.Title>Mobile</Card.Title>
    <Card.Text>
    Some of the best quality products with best prices
    </Card.Text>
    <Link className="btn btn-primary btn-raised" to="/mobile">Go To Mobiles</Link>
  </Card.Body>
</Card>
</Col>

</Row>
</Container>
<hr/>
<Navbar bg="dark">
    <Navbar.Brand  href="#home">
        SHOPKART 2020 
    </Navbar.Brand>
  </Navbar>



</>
          )
        }
        
        
        }

export default Home;





  