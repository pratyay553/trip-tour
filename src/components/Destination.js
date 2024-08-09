import React from "react";
import "./Destinationstyle.css";
import bg2 from "../screens/des.jpeg";
import bg1 from "../screens/des3.jpeg";
import bg3 from "../screens/des2.jpg";
import bg4 from "../screens/des1.jpeg";
import DestinationData from "./DestinationData";
export default function Destination() {
  return (
    <div className="Destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Tajmahal, Delhi"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
        image1={bg1}
        image2={bg2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Burj khalifa, Dubai"
        text="If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim."
        image1={bg3}
        image2={bg4}
      />
    </div>
  );
}
