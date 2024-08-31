'use client';
import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';
import Home from './components/Home/Home';
import Three1 from './components/3d/Three1';
import Accordins from './components/Accordins/Accordins';
import Plan from './components/Plan/Plan';
import CRUD from './components/CRUD/CRUD';
import Demo from './components/demo/Demo';
import Profile from './components/Profile/Profile';
import './App.css';
import Image from './components/Home/Image';
import bag from "/images/scroll/bag.png"
import plane from "/images/scroll/plane.png"
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger)

function App() {

  const scrollref = useRef()
  const scrollref2 = useRef()
  const tl = gsap.timeline();

  tl.to(scrollref.current, {  
    y: "+=800px",  
    x: "+=900px",  
    scrollTrigger: {
      trigger: ".secpage",
      scroller: "body",
      start: "14% 50%",
      end: "45% 50%",
      scrub: 1
    }
  })
  tl.to(scrollref2.current,{
    x: "+=1200px", 
    y:"-300px",
    scale: 3, 
    scrollTrigger: {
      trigger: ".secpage",
      scroller: "body",
      start: "20% 50%",
      end: "55% 50%",
      markers: true,
      scrub: 1
    }
  })

  const lenis = useLenis(({ scroll }) => {
    console.log('Current scroll position:', scroll);
  });

  useEffect(() => {
    // Perform any side effects here, if needed
  }, [lenis]);

  return (
    <ReactLenis root>
      <BrowserRouter>
        <Image ref={scrollref} imgurl={bag} alttext="bag" classProp='w-[20%] top-1/2 left-14 z-[99]' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/accordins" element={<Accordins />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/crud" element={<CRUD />} />
          <Route path="/three1" element={<Three1 />} />
        </Routes>
        <Three1 className="secpage" />
        <Image ref={scrollref2} imgurl={plane} alttext="plane" classProp='w-[20%] top-[880px] scale-[0.7] -left-42 z-[99]' />
        <Plan data-scroll data-scroll-speed="-0.9" />
        <Accordins />
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
