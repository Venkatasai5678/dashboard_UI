import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


const Contact = () => {


    const [formData, setFormData] = useState({});

    const handlechange = (e) => {

      const {name,value} = e.target;
      setFormData({
        ...formData,
        [name]:value
      });
    };

    const Savehandle = (e) =>  {
e.preventDefault();
console.log("formData :" , formData);
axios.post("http://localhost:5067/api/customer/Savecontact",formData).then(Response => {
setFormData(Response.data);
}).catch(error =>{
  console.error(error);
})
    };
  return (
    
     <div className="container"> 
       
    <div className="row">
      <div className="col-md-3">
        <label>Name :</label>
      </div>
      
 <div className="col-md-3">
        <input type="text" name="name"   onChange={handlechange} />
      </div>
    </div>

    <div className="row">
      <div className="col-md-3">
        <label>Email :</label>
      </div>
      
 <div className="col-md-3">
        <input type="text" name="Email"   onChange={handlechange} />
      </div>
    </div>

<button onClick={Savehandle}>Save</button>
    </div>
    
  );
};

export default Contact;  // <-- This is important