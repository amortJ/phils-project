import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import PictureQuestion from "./PictureQuestion";
import Result from "./Result";

function App() {
  const [selection, setSelection] = useState([]);
  const [currentPic, setCurrentPic] = useState(1);
  const [showResult, setShowResult] = useState(false);

  function addSelection(pos) {
    console.log("addSelection:" + pos);
    setCurrentPic(currentPic + 1);

    setSelection([...selection, pos]);

    if (currentPic == 10) {
      setShowResult(true);
    }

    console.log(selection);
  }

  return (
    <div className="App">
      <div className="Header">
        <div className="Title">Phils project</div>
      </div>

      {currentPic <= 10 && (
        <PictureQuestion
          addSelection={addSelection}
          currentPicture={currentPic}
          totalPictures={10}
        />
      )}

      {showResult && <Result result={selection} />}
    </div>
  );
}

export default App;
