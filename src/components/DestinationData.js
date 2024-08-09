import React from 'react'


import '../components/Destinationstyle.css'
export default function DestinationData(props) {
  return (
    <div>
      <div className={[props.className]}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={props.image1} />
          <img alt="img" src={props.image2} />
        </div>
      </div>
    </div>
  );
}
