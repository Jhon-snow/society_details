// dashoard.tsx
import React from 'react';
import axios from 'axios'
import './dashboard.css' 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Signin } from '../Signin/signin';
import addIcon from '../assets/plus-icon.svg';
import { Header } from '../Header/header';
import Newentryind from '../Newentryind/newentryind';
import Newentryapr from '../Newentryapr/newentryapr';
import Societysheet from '../Societysheet/societysheet';
 

const Dashboard = () =>{

return(

    <div className="frame">
     <Societysheet/>
     <div className="flex">
     <Link to="/newentryind"><button className="btn btn-primary" >add new society having INDEPENDENT BUILDINGS</button></Link>
    <Route exact strict path="/newentryind" compontent={Newentryind}></Route>
    <Link to="/newentryapr"><button className="btn btn-primary" >add new society having APARTMENTS</button></Link>
    <Route exact strict path="/newentryapr" compontent={Newentryapr}></Route>
    
     </div>
    

</div>
);
}
export default Dashboard;