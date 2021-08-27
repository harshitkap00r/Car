import React, { useState } from "react";
import "./orderComplete.scss";
import haha from "../../photos/Haha.png";
import { useParams } from "react-router-dom";

const OrderComplete = (props: any) => {
  props = useParams();

  let [order, setorder] = useState<any>();

    async function fetchMyAPI() {
      let data: any = await fetch("/carlist/");
      data = await data.json();
      data = data[props.key - 1];
      setorder(data);
    }
    fetchMyAPI();
  console.log(order);
  return (
    <>
      <div className="order2">
        <h2>Your Order is Complete</h2>
      </div>
      <div className="photo">
        <img src={haha} alt="" />
      </div>
      <div className="config">
        <h1>{order?.name}</h1>
      </div>
      <div className="spec">
        <div className="range">
          {order?.start_range}
          <br />
          <div className="txt">Est Range</div>
        </div>
        <div className="speed">
          {order?.top_speed}
          <br />
          <div className="txt">Top speed</div>
        </div>
        <div className="mph">
          {order?.Time_to_60} sec
          <br />
          <div className="txt">0-60</div>
        </div>
      </div>
      <div className="finalprice">
        <h1>Final Price</h1>
      </div>
      <div className="price4">
        <h3>{order?.base_price}</h3>
      </div>
    </>
  );
};
export default OrderComplete;
