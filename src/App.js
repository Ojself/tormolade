import logo from "./logo.png";
import { useState } from "react";

function App() {
  const [quickSpin, setQuickSpin] = useState(false);
  const handleMouseDown = (e) => {
    e.preventDefault();
    setQuickSpin(true);
  };
  const handleMouseUp = (e) => {
    e.preventDefault();
    setQuickSpin(false);
  };

  const rotateStyle = quickSpin ? "animate-spin-quick" : "animate-spin-slow";
  return (
    <main
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
      onTouchStart={(e) => handleMouseDown(e)}
      onTouchEnd={(e) => handleMouseUp(e)}
      className='App flex justify-center overflow-hidden h-screen items-center border-2 '
    >
      <img
        src={logo}
        className={`App-logo ${rotateStyle} h-80 lg:h-96 w-auto overflow-hidden`}
        alt='logo'
      />
    </main>
  );
}

export default App;
