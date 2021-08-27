import React, { useState } from "react";
import "./allCar.scss";
import model_S from "../../photos/allCar_model_S.png";
import { Link } from "react-router-dom";

const AllCar = () => {
  const [response, setResponse] = useState<any>([]);

  React.useEffect(() => {
    async function fetchMyAPI() {
      let data: any = await fetch("/carlist/");
      data = await data.json();
      setResponse(data);
    }
    fetchMyAPI();
  }, []);
  console.log(response)

  let c = 1;
  const model = () => {
    if (c === 1) {
      c = 0;
      return <h1>ALL MODELS</h1>;
    }
  };

  return response.map((key: any) => {
    return (
      <>
        <div className="models">{model()}</div>
        <div className="allcar">
          <div className="cars">
            <div className="car">
              <Link to={"/cardetails/" + `${key.id}`}>
                <img src={model_S} alt="" />
              </Link>
            </div>
            <div className="cardetail">
              <div className="namerange">
                <div className="name">{key?.name}</div>
                <div className="range">{key?.start_range} mi</div>
              </div>
              <div className="all">
                <div className="details">
                  <div className="detail">
                    <div className="eachdetails">{key?.Time_to_60} sec</div>
                    <div className="eachname">0-60</div>
                  </div>
                  <div className="detail">
                    <div className="eachdetails">{key?.top_speed} Mph</div>
                    <div className="eachname">Top Speed</div>
                  </div>
                  <div className="detail">
                    <div className="eachdetails">{key?.peak_power} HP</div>
                    <div className="eachname">Peak Power</div>
                  </div>
                  <div className="detail">
                    <div className="eachdetails">${key?.start_range}</div>
                    <div className="eachname">Starts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* </Link> */}
      </>
    );
  });
};

export default AllCar;
