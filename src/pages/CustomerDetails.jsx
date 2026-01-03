import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const CustomerDetails = () => {
     const [cities,setCities] = useState([]);
const [customers, setCustomers] = useState([]);
     const [showCustomerID, setShowCustomerID] = useState(false);

const [formData, setFormData] = useState({
    CustomerID: "",
    Name: "",
    mobno: "",
  Cityid: "",
  gender: "",
  DateofBirth:""
});
   
  const savehandle = () => {
  axios.post("http://localhost:5067/api/Customer/Save", formData)
    .then(response => {
      console.log("Saved successfully:", response.data);
    
    })
    .catch(error => {
      console.error("Error saving data:", error);
    });
};


 const updatehandle = () => {
  // Prepare payload with Id property to match API
  const payload = {
    ...formData,
    Id: formData.CustomerID // ensure the Id property is set correctly
  };

  axios.put(`http://localhost:5067/api/Customer/Update/${formData.CustomerID}`, payload)
    .then(response => {
      console.log("Updated Successfully:", response.data);
    })
    .catch(error => {
      console.error("Error updating data:", error);
    });
};

 
const edithandle = () =>
{
axios.get("https://localhost:5067/api/Customer/CustomerLoad")
.then(response => {
console.log(response.data);
setCustomers(response.data);
  setShowCustomerID(true);
})
.catch(error => {
    console.error(error);
})
};

useEffect(() =>
{
    axios.get("http://localhost:5067/api/Customer/Citiesload")
    .then(response => {
setCities(response.data);
console.log(response.data);
    })
    .catch(error => console.error("Error fetching cities:", error));
},[]
);

  return (
    <div className="container">


<div className="row">
    <div className="col-md-3">
        <label>Customer Id :.</label>
    </div>
    <div className="col-md-4">
        <select
  className="form-control"
  onChange={async (e) => {
    const selectedId = e.target.value;
console.log(selectedId);
    try {
      const response = await fetch(`http://localhost:5067/api/Customer/Edit/${selectedId}`);

      const data = await response.json();
console.log(data);
     setFormData({
  CustomerID: data.id,          // OK, different name but assigned explicitly
  Name: data.name,              // data.name → Name (capital N) is fine
  mobno: data.mobNo,            // data.mobNo → mobno (all lowercase) - be consistent!
  Cityid: data.cityId,          // Cityid vs cityId - be consistent!
  gender: data.gender,
  DateofBirth: data.DateOfBirth || ""
});

    } catch (error) {
      console.error("Failed to fetch customer data:", error);
    }
  }}
>
  <option value="">Select</option>
  {customers.map((cust) => (
    <option key={cust.id} value={cust.id}>
      {cust.name}
    </option>
  ))}
</select>

    </div>
</div>




      <div className="row">
    <div className="col text-center">
      <h2 className="mb-4">Customer Details</h2>
    </div> 
  </div>
      <div className="row ">
        <div className="col-md-3">
          <label>Name :</label>
        </div>
        <div className="col-md-4">
          <input type="text" className="form-control" value={formData.Name || ""} 
          onChange={(e) => setFormData({...formData,Name: e.target.value})}
          />
        </div>
      </div>

      <div className="row ">
        <div className="col-md-2">
          <label>Mobile Number :</label>
        </div>
        <div className="col-md-4">
         <input
  type="number"
  className="form-control"
  value={formData.mobno || ""}
  onChange={(e) =>
    setFormData({ ...formData, mobno: e.target.value })
  }
/>

        </div>
      </div>
 
      <div className="row">
        <div className="col-md-2">
          <label>City :</label>
        </div>
        <div className="col-md-4">
          <select className="form-control"
          value={formData.Cityid || ""}
          onChange={(e) => setFormData({...formData,Cityid: e.target.value})}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.cityID} value={city.cityID}>
                {city.cityName}
              </option>
            ))}
             </select>
        </div>
        <div className="col-md-2">
          <label>Gender :</label>
        </div>
        <div className="col-md-4">
        <input type="checkbox" name="gender" checked={formData.gender == "Male"}
         onChange={() => setFormData({...formData,gender:"Male"})}
             
    />Male
        <input type="checkbox"  name="gender" 
        checked={formData.gender == "FeMale"}
         onChange={() => setFormData({...formData,gender:"FeMale"})}/>Fe-Male
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <label>Date of Birth :</label>
        </div>
        <div className="col-md-6">
        <input type="date" value={formData.DateofBirth || ""}  
        onChange={(e) => setFormData({...formData,DateofBirth:e.target.value})}
        className="form-control"></input>
        </div>         
      </div>

<button className="btn btn-primary" onClick={savehandle}>Save</button>
<button className="btn btn-primary" onClick={edithandle}>Edit</button>
<button className="btn btn-primary" onClick={updatehandle}>Update</button>
    </div>
  );
};

export default CustomerDetails;