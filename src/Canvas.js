import React, { useEffect, useRef } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    function getRandomInt(upper) {
      return Math.floor(Math.random() * Math.floor(upper));
    }

    function pad(input) {
      if (input < 10) {
        return "0" + input;
      }
      return input;
    }

    function getColor() {
      return (
        "#" +
        pad(getRandomInt(99)) +
        pad(getRandomInt(99)) +
        pad(getRandomInt(99))
      );
    }

    function drawCircle() {
      context.strokeStyle = getColor();
      context.fillStyle = getColor();
      context.arc(
        getRandomInt(600),
        getRandomInt(400),
        getRandomInt(150),
        0,
        2 * Math.PI
      );
    }

    function drawRect() {
      context.strokeStyle = getColor();
      context.fillStyle = getColor();
      context.fillRect(
        getRandomInt(400),
        getRandomInt(600),
        getRandomInt(200),
        getRandomInt(200)
      );
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    //context.fillStyle = "#953847";

    //context.fillRect(40, 40, 180, 250);
    //context.arc(100, 100, 50, 0, 2 * Math.PI);
    //context.fill();
    for (var i = 0; i < 10; i++) {
      context.beginPath();
      drawCircle();
      drawRect();

      if (getRandomInt(2) < 1) {
        context.fill();
      } else {
        context.stroke();
      }
    }
  });

  return <canvas ref={canvasRef} {...props} className="Canvas1" />;
};

export default Canvas;
