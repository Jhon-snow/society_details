// dashoard.tsx
import React from 'react';
import axios from 'axios'
import './societysheet.css' 

 
interface IEntry {
    email_id: string;
    fencing: string;
    guard: string;
    lift_capacity: string;
    location:string;
    name :string;
    no_of_flats:string;
    no_of_floors:string;
    no_of_wings:string;
    phone_no:string;
    service_lift:string;
    society_type:string;
    societyname:string;
    total_flats:string;
    vechile_parking:string // added for  the unique id
}

const Societysheet = (props:any) =>{    

    const [entries,setEntries] = React.useState<IEntry[]>([]);
    const [checkstate,setCheckstate]=React.useState("");
    //use effect to call get api before rendering
    React.useEffect(()=>{
        getTaskEntries();
    },[] );

    const getTaskEntries =()=>{
        var token=localStorage.getItem('itemName')
        if(token){
            axios.get('http://localhost:5000/societydetails')
            .then(function(response){
                const entriesString =response.data.result;
                const entries =entriesString ;
                setEntries(entries);
                console.log(entries);
                console.log(entries.length)
        })
        .catch(function(error){
            console.log(error);
       //Perform action based on error
        });
        }
        else{
            alert("unauthorised user")
        }
       
    }

    const deletecard=(location:string)=>{
        console.log(location)
        axios.delete('http://localhost:5000/deletesociety',{data:{location:location}})
        .then(function(response){
             console.log(response)
    })
    .catch(function(error){
        console.log(error);
    });
    

    }

    const showdetails=(location:string)=>{
        setCheckstate(location);
    }

    const closeit=()=>{
        setCheckstate("");
    }
return(
            <div>
                {entries.length > 0 ? 
                // <TaskList entries={entries} />
                entries.map((entry: IEntry)=>(
                    
                    <div className="frame">
                    <div className="card" >
              <img className="card-img-top" alt="Card image"/>
              <div className="card-body">
              <div className="flex">
                      <label>Society name</label>
                      <h4 className="card-title">{entry.societyname}</h4>
                  </div>
                
                  <div className="flex">
                      <label>Society type</label>
                      <p className="card-text">{entry.society_type}</p>
                  </div>

                  <div className="flex">
                      <label>Location of  society</label>
                      <p className="card-text">{entry.location}</p>
                  </div>
                <button  className="btn btn-primary" onClick={() => showdetails(entry.location)} >See Profile</button>
                <button className="btn btn-danger " onClick={() => deletecard(entry.location)}>Delete card</button>

                    {/* display card details */}

                {(checkstate == entry.location)?    (     <div className="frame">
                    <div className="card" >
              <img className="card-img-top" alt="Card image"/>
              <div className="card-body">
                  
                  <div className="flex">
                      <label>Society name</label>
                      <h4 className="card-title">{entry.societyname}</h4>
                  </div>
                
                  <div className="flex">
                      <label>Society type</label>
                      <p className="card-text">{entry.society_type}</p>
                  </div>

                  <div className="flex">
                      <label>Location of  society</label>
                      <p className="card-text">{entry.location}</p>
                  </div>

                  <div className="flex">
                      <label>Fencing avilable</label>
                      <p className="card-text">{entry.fencing}</p>
                  </div>
                
                  <div className="flex">
                      <label>Guard avilable</label>
                      <p className="card-text">{entry.guard}</p>
                  </div>
                
                  <div className="flex">
                      <label>No of wings </label>
                      <p className="card-text">{entry.no_of_wings}</p>
                  </div>

                  <div className="flex">
                      <label>No of floors </label>
                      <p className="card-text">{entry.no_of_floors}</p>
                  </div>
               
                  <div className="flex">
                      <label>No of flats </label>
                      <p className="card-text">{entry.no_of_flats}</p>
                  </div>

                  <div className="flex">
                      <label>Total No of flats </label>
                      <p className="card-text">{entry.total_flats}</p>
                  </div>
                
                  <div className="flex">
                      <label>Management name </label>
                      <p className="card-text">{entry.name}</p>
                  </div>
                
                  <div className="flex">
                      <label>Phone no </label>
                      <p className="card-text">{entry.phone_no}</p>
                  </div>
                
                  <div className="flex">
                      <label>Management email id </label>
                      <p className="card-text">{entry.email_id}</p>
                  </div>

                  <div className="flex">
                      <label>Service lift is avilable </label>
                      <p className="card-text">{entry.service_lift}</p>
                  </div>

                  <div className="flex">
                      <label>Lift capacity</label>
                      <p className="card-text">{entry.lift_capacity}</p>
                  </div>

                  <div className="flex">
                      <label>vechile parking avilable</label>
                      <p className="card-text">{entry.vechile_parking}</p>
                  </div>

                
                 <button className="btn btn-danger " onClick={closeit}>cancel</button>
              </div>
            </div>
            </div>):
            (console.log(""))}

            {/* end here */}
              </div>
            </div>
            </div>
            ))              
            : 
                <p className="empty-text">No entries yet. Add a new entry by clicking the add button.</p>
            }


         </div>
  
);
}
export default Societysheet;