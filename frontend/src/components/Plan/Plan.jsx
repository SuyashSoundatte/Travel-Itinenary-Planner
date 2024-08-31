import { useRef, useEffect } from "react";
import animated from "/images/plan/animated.gif";
import { MdArrowOutward } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CgAnchor } from "react-icons/cg";
import gsap from "gsap";
import { CgAirplane } from "react-icons/cg";

gsap.registerPlugin(ScrollTrigger);

function Plan() {
  const marqueeref = useRef();

  useEffect(() => {
    
    const scaleAnimation = gsap.to(marqueeref.current, {
      x: "-60%", 
      duration:0.3,
      scrollTrigger: {
        trigger: ".marqueeScroll",
        scroller: "body",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });
    return () => {
      scaleAnimation.scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="marqueeScroll min-h-screen w-full p-10 flex flex-col bg-blue-400">
      <h1 className="text-4xl font-bold mb-8">Plan Your Travelling Now!</h1>
      <div className="h-screen w-full p-10 flex gap-8">
        <div className="h-full w-full rounded-xl overflow-hidden">
          <img src={animated} alt="animated" className="object-cover w-full h-full rounded-xl" />
        </div>
        <div className="h-full w-full rounded-xl flex flex-col justify-center">
          <p className="text-lg mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab laudantium beatae, excepturi debitis sapiente nisi molestias assumenda illo quasi commodi, nemo, quibusdam similique ratione perferendis necessitatibus officia expedita eligendi? Aut voluptate rerum quas minus culpa neque modi et obcaecati voluptates?
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300">
            Plan Now
          </button>
        </div>
      </div>
      <div className="h-[20vh] w-full overflow-hidden relative">
        <div ref={marqueeref} className="h-full flex items-center justify-between absolute inset-0">
          <h1 className="flex items-center justify-center text-[6em] w-full h-full whitespace-nowrap">
            Travel Now <CgAirplane className="ml-4" />
          </h1>
          <h1 className="flex items-center justify-center text-[6em] w-full h-full whitespace-nowrap">
            Travel Now <CgAnchor className="ml-4" />
          </h1>
          <h1 className="flex items-center justify-center text-[6em] w-full h-full whitespace-nowrap">
            Travel Now <CgAirplane className="ml-4" />
          </h1>
          <h1 className="flex items-center justify-center text-[6em] w-full h-full whitespace-nowrap">
            Travel Now <MdArrowOutward className="ml-4" />
          </h1>
          <h1 className="flex items-center justify-center text-[6em] w-full h-full whitespace-nowrap">
            Travel Now <MdArrowOutward className="ml-4" />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Plan;
