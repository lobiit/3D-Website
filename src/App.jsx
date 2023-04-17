import { useState } from 'react'
// import Canvas from "./canvas/index.js"
import Customizer from "./pages/Customizer.jsx";
import Home from "./pages/Home.jsx";
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className={"app transition-all ease-in"}>
        <Home />
        {/*<Canvas/>*/}
        <Customizer />
    </main>
  )
}

export default App
