import React from "react";

const ProductCard = ({ name, price, image }) => {
return (
    <div className="col-md-4" style={{marginLeft:"100px"}}>
    <div className="card" style={{ width: "20rem", margin: "20px" }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: ₹{price}</p>
        <button className="btn btn-primary"   >Buy Now</button>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;