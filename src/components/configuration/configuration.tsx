import React, { useState } from "react";
import red from "../../photos/allCar_model_S.png";
import white from "../../photos/allCar_model_X.png";
import { useParams } from "react-router-dom";
import "./configuration.scss";
import { Link } from "react-router-dom";
const Configuration = (props: any) => {
  props = useParams();

  let [car, setcar] = useState<any>();

    async function fetchMyAPI() {
      let data: any = await fetch("/carlist/");
      data = await data.json();
      data = data[props.key - 1];
      setcar(data);
    }
    fetchMyAPI();
  console.log(car);

  let [color, setcolor] = useState<any>(white);
  const whiteChange = () => {
    console.log("white");
    setcolor(white);
    console.log(color);
  };
  const redChange = () => {
    console.log("red");
    setcolor(red);
    console.log(color);
  };
  console.log(props.key)

  const nxt="/orderComplete/"+props.key;
  console.log(nxt);

  return (
    <>
      <div className="car">
        <img src={color} alt="" width="1700px" height="800px" />
        <div className="config">
          <h1>{car?.name}</h1>
        </div>
        <div className="spec">
          <div className="range">
            {car?.start_range}
            <br />
            <div className="txt">Est Range</div>
          </div>
          <div className="speed">
            {car?.top_speed}
            <br />
            <div className="txt">Top speed</div>
          </div>
          <div className="mph">
            {car?.Time_to_60} sec
            <br />
            <div className="txt">0-60</div>
          </div>
        </div>

        <div className="button1">
          <button>Long Range</button>
          <button>Plaid</button>
          <button>Plaid+</button>
        </div>
        <h2>Paint Option</h2>
        <div className="paint">
          <button onClick={whiteChange}>White</button>
          <button onClick={redChange}>Red</button>
        </div>
        <div className="self">
          <h2>Full Self-Driving</h2>
          <h2>Capabilities</h2>
          <div className="para">
            Navigate on Autopilot
            <br />
            Auto Lane Change
            <br />
            Autopark
            <br />
          </div>
          <div className="add">
            <button>Add</button>
          </div>
          <div className="order">
            <h2>Order Your {car?.name}</h2>
          </div>
          <div className="ordernow">
            <Link to={nxt}>
            <button>Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Configuration;
