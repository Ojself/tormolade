import logo from "./logo.png";
import { useState } from "react";

function App() {
  const [quickSpin, setQuickSpin] = useState(false);
  const handleMouseDown = () => {
    setQuickSpin(true);
  };
  const handleMouseUp = () => {
    setQuickSpin(false);
  };

  const rotateStyle = quickSpin ? "animate-spin-quick" : "animate-spin-slow";
  return (
    <main
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
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
