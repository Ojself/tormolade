import logo from "./logo.png";
import { useState } from "react";

function App() {
  const [rotating, setRotating] = useState(0);
  const handleStop = () => {};
  return (
    <main
      onClick={handleStop}
      className='App flex justify-center h-screen items-center border-2 '
    >
      <img
        src={logo}
        className='App-logo animate-spin-slow h-42 lg:h-screen w-auto overflow-hidden'
        alt='logo'
      />
    </main>
  );
}

export default App;
