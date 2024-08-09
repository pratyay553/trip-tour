import React from "react";

export default function Tripdata(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.img} alt="image1" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
