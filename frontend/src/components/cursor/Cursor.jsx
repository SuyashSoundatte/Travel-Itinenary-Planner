import PropTypes from "prop-types";
import gsap from "gsap";
import { useEffect } from "react";

function Cursor({ className }) {
  useEffect(() => {
    let isMoving = false;

    const handleMouseMove = (e) => {
      if (!isMoving) {
        isMoving = true;
        gsap.to(".cursor", {
          width: "80px",
          height: "80px",
          ease: "power3.out",
          duration: 0.3,
        });
      }

      gsap.to(".cursor", {
        x: e.clientX - 40,
        y: e.clientY - 40,
        ease: "power3.out",
        duration: 0.1,
      });
      clearTimeout(window.cursorTimeout);
      window.cursorTimeout = setTimeout(() => {
        gsap.to(".cursor", {
          width: "20px",
          height: "20px",
          ease: "power3.out",
          duration: 0.3,
        });
        isMoving = false;
      }, 10);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(window.cursorTimeout);
    };
  }, []);

  return (
    <div
      className={`cursor ${className} fixed pointer-events-none`}
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: "red",
        borderRadius: "50%",
        mixBlendMode: "difference",
        zIndex: 9999,
        top: 0,
        left: 0,
      }}
    ></div>
  );
}

Cursor.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Cursor;
