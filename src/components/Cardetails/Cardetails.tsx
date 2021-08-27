import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardetail from "../../photos/Cardetails.png";
import "./Cardetails.scss";
import { Link } from "react-router-dom";

function Cardetails(props: any) {
  props = useParams();
  //   console.log(props.key);

  let [car, setcar] = useState<any>();

    async function fetchMyAPI() {
      let data: any = await fetch("/carlist/");
      data = await data.json();
      data = data[props.key - 1];
      setcar(data);
    }
    fetchMyAPI();
 
  const nxt="/cardetails/"+props.key+"/configuration";
  console.log(car);
  return (
    <>
      <div className="cardetails">
        <div className="img">
          <img src={cardetail} alt="" height="1010px" width="965px" />
        </div>

        <div className="details">
          <div className="carname">{car?.name} Specs</div>
          <div className="btn">
            <button>Plaid</button>
            <button>Long Range</button>
          </div>
          <div className="rangepower">
            <div className="range">
              Range
              <br />
              {car?.start_range}
            </div>
            <div className="power">
              Power Train
              <br />
              {car?.start_range}
            </div>
          </div>
          <div className="peakacceration">
            <div className="peak">
              Peak Power
              <br />
              {car?.peak_power} HP
            </div>
            <div className="acceration">
              Acceleration
              <br />
              {car?.Time_to_60}s 0-60mph
            </div>
          </div>
          <div className="dragspeed">
            <div className="speed">
              Top Speed
              <br />
              {car?.top_speed}
            </div>
            <div className="drag">
              Drag Coefficient
              <br />
              {car?.drag_coefficient} cd
            </div>
          </div>
          <div className="weightwheel">
            <div className="weight">
              Weight
              <br />
              {car?.weight}
            </div>
            <div className="wheel">
              Wheels
              <br />
              {car?.wheels}
            </div>
          </div>
          <div className="cargocharging">
            <div className="cargo">
              Cargo Capacity
              <br />
              {car?.cargo_capacity}
            </div>
            <div className="charging">
              Charging
              <br />
              {car?.charging}
            </div>
          </div>
        <div className="order">
            <Link to={nxt}>
            <button>Order Now</button>
            </Link>
        </div>
        </div>
      </div>
    </>
  );
}
export default Cardetails;
