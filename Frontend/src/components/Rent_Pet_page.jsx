import React from "react";
import Navbar from "../body/sections/Navbar";
import { pet1 } from "../body/images";

const RentPet=()=> {
  return (
    <>
    <Navbar/>
    <div className="card m-4 p-4" style={{ width: "18rem" }}>
      <img className="card-img-top" src={pet1} alt=".." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href=".." className="btn btn-dark">Rent</a>
      </div>
    </div>
    </>
  );
}

export default RentPet