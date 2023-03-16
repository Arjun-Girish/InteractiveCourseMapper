import React, { useState } from "react";
import "./index.css";
import Popup from "./components/Popup";

const App = () => {
  const [boxList, setBoxList] = useState([
    { id: 1, name: "ENG1012", unitTitle: "Engineering design", boxId: 1 },
    { id: 2, name: "PHS1001", unitTitle: "Foundation physics*",  boxId: 2 },
    { id: 3, name: "ENG1090", unitTitle: "Foundation mathematics*", boxId: 3 },
    { id: 4, name: "ENG1013", unitTitle: "Engineering smart systems", boxId: 4 },
    { id: 5, name: "ENG1011", unitTitle: "Engineering methods", boxId: 5 },
    { id: 6, name: "ENG1005", unitTitle: "Engineering mathematics",boxId: 6 },
    { id: 7, name: "ENG1014", unitTitle: "Engineering numerical analysis",boxId: 7 },
    { id: 8, name: "elective", unitTitle: "*", boxId: 8 },
  ]);

  const swapBoxes = (fromBox, toBox) => {
    let boxes = boxList.slice();
    let fromIndex = boxes.findIndex((box) => box.id === fromBox.id) ?? -1;
    let toIndex = boxes.findIndex((box) => box.id === toBox.id) ?? -1;

    if (fromIndex != -1 && toIndex != -1) {
      let temp = boxes[fromIndex];
      boxes[fromIndex] = { ...boxes[toIndex], id: boxes[fromIndex].id };
      boxes[toIndex] = { ...temp, id: boxes[toIndex].id };
      setBoxList(boxes);
    }
  };

  const handleDragStart = (data) => (event) => {
    let fromBox = JSON.stringify({ id: data.id });
    event.dataTransfer.setData("dragContent", fromBox);
  };

  const handleDragOver = (data) => (event) => {
    event.preventDefault();
    return false;
  };

  const handleDrop = (data) => (event) => {
    event.preventDefault();
    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { id: data.id };
    swapBoxes(fromBox, toBox);
    return false;
  };

  const [buttonPopup, setButtonPopup] = useState(false);

  const makeBoxes = () => {
    return (
      <div className="box-container">
        {boxList.map((box, index) => (
          <div
            key={index}
            className="box"
            draggable={true}
            onDragStart={handleDragStart({ id: box.id })}
            onDragOver={handleDragOver({ id: box.id })}
            onDrop={handleDrop({ id: box.id })}
          >
            <div className="content">
              <div className="unit-code">{box.name}</div>
              <div className="unit-title">{box.unitTitle}</div>
                <button className="unit-info" onClick={() => setButtonPopup(true)}>ⓘ</button>

                  <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

                      <h1>{box.name}</h1>
                      <h1>{box.unitTitle}</h1>
                      
                  </Popup>

            </div>
          </div>
        ))}
      </div>
    );
  };

  return <div className="boxesGroup">{makeBoxes()}</div>;
};

export default App;
