import React  from "react";
import {Link} from "react-router-dom";

const Header = () => (
    <nav className="navbar-expand-lg navbar-dark bg-dark px-3 fixed-top" >


<div className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
  <Link className="navbar-brand" to="/">Pickles Site</Link>

  <div className="navbar-nav">
    <Link className="nav-link mx-3" to="/Home">Home</Link>
    <Link className="nav-link mx-3" to="/Product">Products</Link>
    <Link className="nav-link mx-3" to="/Contact">Contact</Link>
        <Link className="nav-link mx-3" to="/CustomerDetails">CustomerDetails</Link>
 <Link className="nav-link mx-3" to="/memoexample">memoexample</Link>
 <Link className="nav-link mx-3" to="/Reducerhook">Reducerhook</Link>
 <Link className="nav-link mx-3" to="/ApexchartsBarchart">ApexchartsBarchart</Link>

 

        
  </div>
</div>

    </nav>
);
export default Header;