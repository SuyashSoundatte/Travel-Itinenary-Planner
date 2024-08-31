import { useState, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import accData from "../../data/accordins/Accordin";

function Accordins() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const imageRef = useRef(null);

  const showImage = (url) => {
    setHoveredImage(url);
  };

  const hideImage = () => {
    setHoveredImage(null);
  };

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        x: e.clientX - 100,
        y: e.clientY - 100,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="h-screen w-full p-5 relative overflow-hidden bg-zinc-200">
      <div className="h-full w-full grid text-[2.5em] cursor-pointer grid-rows-5 relative">
        {accData.map((item, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              showImage(item.imgurl);
              handleMouseMove(e);
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={hideImage}
            className="accordin1 border-2 border-b-black flex justify-between items-center relative"
          >
            <div className="flex items-center justify-center">
              <h1>{item.num} .</h1>
              <p>{item.text}</p>
            </div>
            <MdArrowOutward />
          </div>
        ))}
        {hoveredImage && (
          <div
            ref={imageRef}
            className="z-50 absolute h-[30vh] w-[300px] rounded-2xl pointer-events-none"
            style={{
              backgroundImage: `url(${hoveredImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Accordins;
