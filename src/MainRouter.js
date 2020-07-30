import React from "react";
import {Switch,Route} from "react-router-dom";


import Register from "./register"
import Home from "./Home"
import login from "./login"
import cloth from "./cloth"
import mobile from "./mobile"
import laptop from "./laptop"




const MainRouter = () => (
    
    <div>
       
       
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/regis" component={Register} />
        <Route exact path="/login" component={login} />
        <Route exact path="/cloth" component={cloth} />
        <Route exact path="/laptop" component={laptop} />
        <Route exact path="/mobile" component={mobile} />
        

         
         
          
        </Switch>
    </div>
);

export default MainRouter;
