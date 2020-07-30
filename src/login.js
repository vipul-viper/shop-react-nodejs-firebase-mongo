import React,{Component} from "react"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import fire from "./config/fire"
import {Link,} from "react-router-dom";



class login extends Component{
    constructor(props)
    {
        super(props)
        this.login=this.login.bind(this)
        
         
         this.handleChange=this.handleChange.bind(this)
        this.state ={
            email:"",
            password:"",
            user:{},
            error:""
            
        }
    }
    componentDidMount()
    {
      this.authListener();
    }
    authListener()
    {
      fire.auth().onAuthStateChanged((user)=>{
        if(user)
        {
         this.setState({user})
       }
        else this.setState({user:null})
      })
   }
  
   login(e)
   {
     e.preventDefault()
     fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
     console.log(u)
     localStorage.setItem('key', u.user.uid)
     this.props.history.push('/');
   
    }).catch((error)=>{
       localStorage.removeItem('test')
       this.setState({error:"wrong combination"})
       console.log(error)})
     this.setState({
         email:"",
         password:"",
         open1:true
     
         
         
         
     })
    }
     handleChange(e)
     {
       this.setState({error:""})
         this.setState({
             [e.target.name]:e.target.value
         })
     }
    
render()
{
  if(!localStorage.getItem("key"))
    return(
        <>
        
  <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">SHOPMART</Navbar.Brand>
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
    <Nav.Link ><Link to="/regis">REGISTER</Link></Nav.Link>} 
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div className="mt-5 mx-auto" style={{ 
  padding: "20px", 
  width: "400px",
  border: "2px solid",
  
  overflow: "auto"}}>
     <div
                    className="alert alert-danger w-50 mx-auto"
                    style={{ display: this.state.error ? "" : "none" }}
                >
                    {this.state.error}
                </div>
<form>
<div className="form-group">
                <label className="text-dark">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.email}/>
                </div>
                <div className="form-group">
                <label className="text-dark">Password</label>
                 <input
                 name="password"
                type="password"
                className="form-control"
                id="password"
                onChange={this.handleChange}
                value={this.state.password}/>
                </div>
               
                
                <button className="btn btn-primary btn-raised" onClick={this.login}>SIGNIN</button>  
                  
                
</form>
<hr/>
<p>Not having an account?  <Link to="/regis">Register Now</Link></p>



</div>

</>
          )
          else
          return(
            <>
            <h1>please click below, you are already signed in</h1>
            <Link to="/">HOME</Link>
            </>
          )
        }
        
        
        }

export default login;





  