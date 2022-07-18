import { useState } from "react";

const Home = () => {
  const [background, setBackground] = useState({
    backgroundColor: "rgb(255, 255, 255)",
  });

  const random = () => Math.floor(Math.random() * 255);

  const handleColor = () => {
    setBackground(() => {
      return {
        backgroundColor: `rgb(${random()}, ${random()}, ${random()})`,
      };
    });
  };

  return (
    <div className="home" style={background}>
      <button onClick={() => handleColor()}>Change background</button>
    </div>
  );
};

export default Home;
