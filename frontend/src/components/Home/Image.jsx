import { forwardRef } from 'react';
import PropTypes from 'prop-types';

// Using forwardRef and adding a display name
const Image = forwardRef(({ imgurl, alttext, classProp }, ref) => (
  <div ref={ref} className={`${classProp} absolute`}>
    <img src={imgurl} alt={alttext} />
  </div>
));

Image.displayName = "Image"; // Adding display name

Image.propTypes = {
  imgurl: PropTypes.string.isRequired,
  alttext: PropTypes.string.isRequired,
  classProp: PropTypes.string.isRequired,
};

export default Image;
