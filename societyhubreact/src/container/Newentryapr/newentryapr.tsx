// newentryapr.tsx
import React from 'react';
import axios from 'axios'
import './newentryapr.css' 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Signin } from '../Signin/signin';
import { Header } from '../Header/header';
import Dashboard from '../Dashboard/dashboard';
 const Newentryapr: React.FC = () =>{
    // src="https://source.unsplash.com/daily"
    // className="card-columns"
    const[no_of_floor,setNo_of_floor]=React.useState("");
    const[no_of_flats,setNo_of_flats]=React.useState("");
    const[no_of_wings,setNo_of_wings]=React.useState("");
    const[societyname,setSocietyname]=React.useState("");
    const[location,setLocation]=React.useState("");
    const[fencing,setFencing]=React.useState(false);
    const[guard,setGuard]=React.useState(false);
    const[securitylift,setSecuritylift]=React.useState(false);
    const[vechileparking,setVechileparking]=React.useState(false);
    const[total_no_of_flats,setTotalno_of_flats]=React.useState("");
    const[name,setName]=React.useState("");
    const[mobileno,setMobileno]=React.useState("");
    const[emailid,setEmailid]=React.useState("");
    const[liftcapacity,setLiftcapacity]=React.useState("")



    const register = () =>{

        var societydetail={
        "societyname":societyname,
        "location":location,
        "societytype":"Apartment",
        "fencing":fencing,
        "guard":guard,
        "no_of_wings":no_of_wings,
        "no_of_floor":no_of_floor,
        "no_of_flats":no_of_flats,
        "total_no_of_flats":total_no_of_flats,
        "name":name,
        "mobileno":mobileno,
        "emailid":emailid,
        "securitylift":securitylift,
        "liftcapacity":liftcapacity,
        "vechileparking":vechileparking
        }
        var token=localStorage.getItem('itemName')
        if (token){
            axios.post('http://localhost:5000/societyregister', societydetail)
                .then(function(response){  
                    console.log(response);
           //Perform action based on response
            })
            .catch(function(error){
                console.log(error);
           //Perform action based on error
            });
        }
        else {
            alert("unauthorised user")
        }
           
    
    }

return(
    <div  className="newentry">
    <div className="card">
        <div className="society_info">
        <img className="card-img-top"  alt="Card image top"/>
        <div>
        <input 
            className="value-holders"
            placeholder="societyname"
            type ="text" 
            onChange={(event) => setSocietyname(event.currentTarget.value)}
            // value={societyname}
            />
        </div>
        <div>
        <input 
            className="value-holders"
            placeholder="location"
            type ="text" 
            onChange={(event) => setLocation(event.currentTarget.value)}
            // value={location}
            />
        </div>
        </div>
    
    <div className="card-body">
        <div className="society-type">
        <label className="label1">Society Type</label>
            <label className="label1">Apartments</label>
           
        </div>

        <div className="fencing">
            <label >Fencing is provided</label>
            <div className="custom-control custom-checkbox ">
            <input type="checkbox"  
              onChange={(event) => setFencing(event.currentTarget.checked)}
            />
            <label  >Yes</label>
            </div>
        </div>

        <div className="guard">
            <label>guard is avilable</label>
            <div className="custom-control custom-checkbox ">
            <input type="checkbox" 
            onChange={(event) => setGuard(event.currentTarget.checked)}
            />
            <label >Yes</label>
            </div>
        </div>


        <div>
        <input 
            className="value-holders"
            placeholder="Number of Wings"
            type ="text" 
            onChange={(event) => setNo_of_wings(event.currentTarget.value)}
            //value={no_of_floor}
            />
        </div>
        
        <div>
        <input 
            className="value-holders"
            placeholder="Number of floor"
            type ="text" 
            onChange={(event) => setNo_of_floor(event.currentTarget.value)}
            //value={no_of_floor}
            />
        </div>

        <div>
        <input 
            className="value-holders"
            placeholder=" Number of flats"
            type ="text"
            onChange={(event) => setNo_of_flats(event.currentTarget.value)}
            // value={no_of_flats}
            />
        </div>

        <div>
            <input 
            className="value-holders"
            placeholder="Total number of flats"
            type ="text" 
            onChange={(event) => setTotalno_of_flats(event.currentTarget.value)}
            //value={total_no_of_flats}
            />
        </div>

        <label>MANAGEMETN DETAILS</label>

        <div>
        <input className="value-holders"
            type="text" 
            placeholder="Enter Name" 
            onChange={(event) => setName(event.currentTarget.value)}
            // onChange={onUserameChange} 
            // value={name}
            />
        </div>

        <div>
        <input className="value-holders"
            type="text" 
            placeholder="Enter emailid" 
            onChange={(event) => setEmailid(event.currentTarget.value)}
            // onChange={onUserameChange} 
            // value={emailid}
            />
        </div>

        <div>
        <input className="value-holders"
            type="text" 
            placeholder="Enter Mobile Number" 
            onChange={(event) => setMobileno(event.currentTarget.value)}
            // onChange={onUserameChange} 
            // value={mobileno}
            />
        </div>
     
        <label>ADDITIONAL INFRORMATION</label>

        <div className="securitylift">
            <label>Ddoes security lift is avilable</label>
            <div className="custom-control custom-checkbox ">
            <input type="checkbox"  
            onChange={(event) => setSecuritylift(event.currentTarget.checked)}
            />
            <label  >Yes</label>
            </div>
        </div>

            <div>
                <input className="value-holders" 
                type="text" placeholder="liftcapacity"
                onChange={(event) => setLiftcapacity(event.currentTarget.value)}
                // value={liftcapacity}
                />
            </div>


        <div className="vechileparking">
            <label>Vechile Parking</label>
            <div className="custom-control custom-checkbox ">
            <input type="checkbox" 
            onChange={(event) => setVechileparking(event.currentTarget.checked)}
            />
            <label >Yes</label>
            </div>
        </div>

    </div>

    <Link to="/dashboard"><button className="register-btn" onClick={register}>Register</button></Link>
    <Route exact strict path="/dashboard" component={Dashboard}/>
    
  </div> 

    </div>
    

);
}
export default Newentryapr;