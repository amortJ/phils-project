import React from "react";
import Canvas from "./Canvas";

const PictureQuestion = (props) => {
  return (
    <div>
      <div>
        <div className="Question">Welches Bild ist ästetischer?</div>
        <div className="PictureCounter">
          Bild: {props.currentPicture}/ {props.totalPictures}
        </div>
      </div>
      <div className="Main">
        <Canvas width={600} height={400} />
        <Canvas width={600} height={400} />
      </div>
      <div className="Controls">
        <div className="ControlBlock">
          <button onClick={() => props.addSelection("left")}>Bild links</button>
        </div>
        <div className="ControlBlock">
          <button onClick={() => props.addSelection("right")}>
            Bild rechts
          </button>
        </div>
      </div>
    </div>
  );
};

export default PictureQuestion;
