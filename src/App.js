import "./styles.css";

import { blankCard } from "./images";
import MOCK from "./app.mock";
import React, { useState } from "react";

export default function App() {
  const [imgData, setimgData] = useState(MOCK);
  const [selCard, setselCard] = useState("");

  const handleClick = (img) => {
    setselCard(img);
    let currdata = [...imgData];
    if (selCard.name === img.name) {
      currdata.forEach((val) => {
        if (val.name === img.name) {
          val.pic = blankCard;
        }
      });
    }
  };

  return (
    <div className="App">
      {imgData.map((imageData) => {
        return (
          <button
            id={imageData.id}
            onClick={(e) => handleClick(imageData)}
            style={{ display: "block" }}
          >
            <img src={imageData.pic} style={{ width: "100px" }} />
          </button>
        );
      })}
    </div>
  );
}
