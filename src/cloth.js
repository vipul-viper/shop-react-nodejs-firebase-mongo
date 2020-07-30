import React,{Component} from "react"
import {Navbar,Nav,NavDropdown } from 'react-bootstrap';
import {Link} from "react-router-dom";




class cloth extends Component{
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
      this.props.history.push('/cloth')
     
      
      
     
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
      <NavDropdown.Item href="#action/3.1"><Link  to="/cloth"> Clothes</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><Link  to="/laptop"> Laptops</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><Link  to="/mobile"> Mobiles</Link></NavDropdown.Item>
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

        
         
         



<Navbar bg="dark">
    <Navbar.Brand  href="#home">
        SHOPKART 2020 
    </Navbar.Brand>
  </Navbar>



</>
          )
        }
        
        
        }

export default cloth;





  