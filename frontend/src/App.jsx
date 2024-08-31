'use client'
import Three1 from "./components/3d/Three1"
import Accordins from "./components/Accordins/Accordins"
// import Cards from "./components/cards/Cards"
import Home from "./components/Home/Home"
import Plan from "./components/Plan/plan"
import './App.css'
import { ReactLenis, useLenis } from 'lenis/react'

function App() {
  function Layout() {
    const lenis = useLenis(({ scroll }) => {
      console.log('Current scroll position:', scroll);
    });
  }
  Layout();

  return (
    <ReactLenis root>
      <div className="titles overflow-hidden">
        <Home />
        <Three1 />
        <Plan />
        <Accordins />
        {/* <Cards /> */}
      </div>
    </ReactLenis>
  )
}

export default App
