
//signin.tsx

import React from 'react';
import axios from 'axios';
import './signin.css';
import { Link, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/dashboard';
// import { prependOnceListener } from 'cluster';
// import PropTypes from "prop-typ es";



export const Signin = () =>{
    // console.log("HELLO PROPS:", props.getdetails)

    const[username,setUsername]=React.useState("");
    const[password,setPassword]=React.useState("");

const datacheck = () =>{

    var userdetail={
    "username":username,
    "password":password,
    "token":localStorage.getItem('itemName')
    }

    axios.post('http://localhost:5000/signin', userdetail)
            .then(function(response){  
                localStorage.setItem('itemName', response.data)
                console.log(response);
       //Perform action based on response
        })
        .catch(function(error){
            console.log(error);
       //Perform action based on error
        });

}



const onUserameChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
    setUsername(event.target.value)
}

const onPasswordChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.target.value)
}

// const test=()=>{
//     console.log('finallyyyyyyyyyyyyy')
    
//     //props.getdetails();
// }
// console.log("yeh i m herer",props.name)

return(

    <div className="frame">
        <span></span>
        <div>
            <input className="value-holders" 
            type="text" 
            placeholder="username" 
            onChange={onUserameChange} 
            value={username}/>
        </div>
        <span></span>
        <div>
            <input className="value-holders"
            type="text" 
            placeholder="password"
            onChange={onPasswordChange}
            value={password} />
        </div>

        <Link to="/dashboard">
        <button className="signin-button" onClick={datacheck}>Signin</button>
        </Link>
    <Route exact strict path="/dashboard" component={Dashboard}/>
    
    
</div>
);
}
// Signin.propTypes={
//     getdetails: PropTypes.func
// };
