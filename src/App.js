import logo from "./logo.png";
import { useState } from "react";

function App() {
  const [quickSpin, setQuickSpin] = useState(false);
  const handleMouseClick = () => {
    if (quickSpin) return;
    setQuickSpin(true);
    setTimeout(() => {
      setQuickSpin(false);
    }, 1500);
  };

  const rotateStyle = quickSpin ? "animate-spin-quick" : "animate-spin-slow";
  return (
    <main
      onClick={handleMouseClick}
      className='App flex justify-center h-screen items-center border-2 '
    >
      <img
        src={logo}
        className={`App-logo ${rotateStyle} h-42 lg:h-screen w-auto overflow-hidden`}
        alt='logo'
      />
    </main>
  );
}

export default App;
