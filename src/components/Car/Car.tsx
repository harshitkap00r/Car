import React from "react";
import desktop from "../../photos/Car.png";
import "./Car.scss";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
      <div className="container">
        <img src={desktop} alt="Car" />
        <Link to="/allcar">
          <button className="btn">ALL CARS</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
