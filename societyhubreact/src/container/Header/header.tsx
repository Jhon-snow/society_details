
//header.tsx


import React from 'react';
import axios from 'axios'
import './header.css' 
import { Link, Route } from 'react-router-dom';
import Signup from '../Signup/signup';
import { Signin } from '../Signin/signin';
import Dashboard from '../Dashboard/dashboard';
import Newentryind from '../Newentryind/newentryind';
import Newentryapr from '../Newentryapr/newentryapr';
export const Header: React.FC = () =>{


    const clear=()=>{
        localStorage.clear();
    }


return(
    <div>
        <header className="App-header">
            <label className="home" >Society hub</label>
            <div>
            <Link to="/signup"><label className="signup">Sign-up</label></Link>
            <Link to="/signin"><label className="signin">Sign-in</label></Link>
            <Link to="/signin">
                <button className="signout-btn" onClick={clear}>SignOut</button>
                </Link>
            {/* <Route exact strict path="/" component={Header}/> */}
            <Route exact strict path="/signup" component={Signup}/>
            <Route exact strict path="/signin" component={Signin}/>
            
            </div>
       
       
        </header>
        <Route exact strict path="/dashboard" component={Dashboard}/>
        <Route exact strict path="/newentryind" component={Newentryind}/>
        <Route exact strict path="/newentryapr" component={Newentryapr}/>
    </div>
);
}
