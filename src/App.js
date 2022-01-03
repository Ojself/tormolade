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

  const rotateStyle = quickSpin ? "quick spin" : "slow spin";
  return (
    <main
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
      onTouchStart={(e) => handleMouseDown(e)}
      onTouchEnd={(e) => handleMouseUp(e)}
      className='flex justify-center overflow-hidden h-screen items-center border-2 '
    >
      <div className={`${rotateStyle} logo `} alt='tormolade-logo' />
    </main>
  );
}

export default App;
