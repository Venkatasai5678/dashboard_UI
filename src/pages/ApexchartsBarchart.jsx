import Chart from "react-apexcharts";
import { useQuery } from "@tanstack/react-query";
import { fetchChartData } from "../apisservices/dashboardApi";
import { useEffect, useState } from "react";
import axios from "axios";

function ApexchartsBarchart() {

const [showchar,setshowchar] = useState(null);

const [EmployeeNameId,SetEmployeeName] = useState([]);
const [filters,setfilters] = useState({
  Employeeid : "-1",
  fromDate : "",
  ToDate : "", 
});
 

useEffect(() => {
 axios.get("http://localhost:5067/api/dashboard/EmployeeNameLoad")
    .then(Response => {
      console.log(Response.data);
      SetEmployeeName(Response.data)
    })
    .catch(error => console.log("Error fetching Details :",error));
  },[]
); 

  const { data, isLoading, isError } = useQuery({
    queryKey: showchar 
    ?
    ["chartData",showchar.Employeeid,showchar.fromDate,showchar.ToDate] : ["chartData"] ,
    queryFn: () => 
    fetchChartData(showchar),
    enabled:!!showchar,
  });

  const handleclick = () => {
if(filters.Employeeid == "-1")
{
  alert("Select Employee Name");
  return;
}
else if (filters.fromDate == "")
{
  alert("Select From date");
  return;
}
else if (filters.ToDate == "")
{
  alert("Select To date");
  return;
}
 
setshowchar({...filters});

};

  const categories = data?.map(item => item.label) || [];
  const values = data?.map(item => item.value) || [];

  const options = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: categories,
    },
    title: {
      text: "Load Distribution (Bar)",
    },
  };

  const series = [
    {
      name: "Load",
      data: values,
    },
  ];

  return (
    <>
    <div className="card">
    <div className="row">
      <div className="col-md-6">
      <label>Select Employee Name  </label>
    </div>
 <div className="col-md-6">
  <select className="form-control"   value={filters.Employeeid} 
  onChange={e => setfilters({...filters,Employeeid : e.target.value})}>
    <option value="-1">--Select--</option>
    {EmployeeNameId.map(t => (
        <option key={t.employeeeId} value={t.employeeeId}>{t.employeename}</option>
    ))}
  </select>
    </div>
    </div>
<div className="row">
  <div className="col-md-6">
      <label>From date  </label>
    </div>
    <div className="col-md-6">
      <input type="date" value={filters.fromDate}  onChange={e => setfilters(
        {...filters,fromDate:e.target.value})}/>
    </div>
</div>
<div className="row">

  <div className="col-md-6">
      <label>To date  </label>
    </div>
    <div className="col-md-6">
      <input type="date" value={filters.ToDate} onChange={e=> setfilters({...filters,ToDate:e.target.value})}/>
    </div>
</div>

<div className="row">
  <div className="col-md-6">
       <button type="button" onClick={handleclick} className="btn btn-primary">show</button>
    </div>
</div>
      </div>
      {showchar && (
        <>
           {isLoading && <p>Loading.....</p>}
{isError && <p>Error.....</p>}
{data && (
 <Chart options={options} series={series} type="bar" height={350} />

)

}
      </>
      )};
   
   
    </>
  )};

export default ApexchartsBarchart;
