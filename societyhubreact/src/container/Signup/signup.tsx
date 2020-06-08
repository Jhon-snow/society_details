
//signup.tsx

import React from 'react';
import axios from 'axios'
import './signup.css' 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Signin } from '../Signin/signin';
import Dashboard from '../Dashboard/dashboard';
 const Signup: React.FC = () =>{

    const[name,setName]=React.useState("");
    const[username,setUsername]=React.useState("");
    const[address,setAddress]=React.useState("");
    const[password,setPassword]=React.useState("");

const datafeed = () =>{
    var userdetail={"name":name,
    "username":username,
    "address":address,
    "password":password}
    axios.post('http://localhost:5000/signup', userdetail)
            .then(function(response){
                localStorage.setItem('itemName', response.data)
                //console.log(response);
       //Perform action based on response
        })
        .catch(function(error){
            console.log(error);
       //Perform action based on error
        });

}


const onNameChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value);
}

const onUserameChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
    setUsername(event.target.value)
}

const onAddressChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
    setAddress(event.target.value)
}

const onPasswordChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.target.value)
}



return(

    <div className="frame">
        <div  >
            <input className="value-holders"
            type="text" 
            placeholder="name" 
            
            onChange={onNameChange}
            value={name}
            
            />
        </div>
        <span></span>
        <div  >
            <input className="value-holders"
            type="text" 
            placeholder="username" 
            onChange={onUserameChange} 
            value={username}/>
            </div>
        <span></span>
        <div >
            <input className="value-holders"
            type="text" 
            placeholder="address"
            onChange={onAddressChange} 
            value={address}/>
        </div>
        <span></span>
        <div  >
            <input className="value-holders"
            type="text" 
            placeholder="password"
            onChange={onPasswordChange}
            value={password} />
        </div>

    
    <Link to="/dashboard">
        <button className="signup-button" onClick={datafeed}>SignUp</button>
        </Link>
    <Route exact strict path="/dashboard" component={Dashboard}/>
    
    
</div>
);
}
export default Signup;