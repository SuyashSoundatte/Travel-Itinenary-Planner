import land from "/images/home/Land.jpg";
import "./Home.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "../cursor/Cursor";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scaleAnimation = gsap.to(scrollRef.current, {
      scale: 1.05,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".main-div",
        scroller: "body",
        scrub: true,
        start: "20% 10%",
        end: "110% 40%",
      },
    });
    return () => {
      scaleAnimation.scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="main-div h-screen w-full p-5 grid place-items-center pb-[10vh]">
      <div
        className="relative h-full w-[95%] rounded-lg shadow-lg"
        ref={scrollRef}
        style={{
          backgroundImage: `url(${land})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute w-full h-full text-white flex justify-center items-center flex-col">
          <h1 className="titles z-50 text-center text-[5em]">Explore the world</h1>
          <h1 className="titles z-50 text-center text-[5em]">And Enjoy Its Journey</h1>
        </div>
        <div
          className="h-full w-full rounded-lg"
          style={{
            backgroundColor: "#000000c4",
          }}
        ></div>
        <div className="w-[80%] h-[40vh] absolute top-[80%] z-30 left-[50%] -translate-x-[50%] shadow-2xl bg-yellow-200 rounded-lg"></div>
        <div className="absolute -top-3 w-[80%] left-1/2 -translate-x-[50%] h-[10vh] bg-zinc-300 rounded-xl flex justify-center gap-10 items-center">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/about">
            <h1>About</h1>
          </Link>
          <Link to="/plan">
            <h1>Plan</h1>
          </Link>
          <Link to="/aboutus">
            <h1>About us</h1>
          </Link>
          <Link to="/auth/register">
            <h1>Register</h1>
          </Link>
          <Link to="/profile">
            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/3f/05/2c/3f052c9b0f402d3373b9e0916c53bac7.jpg" />
          </Link>
        </div>
      </div>
      <Cursor className="fixed" />
    </div>
  );
}

export default Home;
