import PropTypes from "prop-types";

function Card({ className }) {
  return (
    <div
      className={`h-full w-full grid transition-all duration-300 ease-in-out ${className}`}
    >
      <div className="h-full w-full bg-red-100 shadow-2xl"></div>
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Card;
