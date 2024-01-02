import PropTypes from 'prop-types';
import Icons from '../assets/icons.svg';
import '../../src/index.css'

const IconSvg = (props) => {
  return (
    <>
      <svg className={props.class} aria-hidden="true" fill="currentColor" width={props.width} height={props.height}>
        <use href={`${Icons}#icon-${props.name}`} />
      </svg>
   </>
  )
};

IconSvg.propTypes = {
  name: PropTypes.string,
  class: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

IconSvg.defaultProps = {
  name: 'profile',
  class: 'text-white dark:text-gray-800',
  width: 18,
  height: 18,
};
  
export default IconSvg;
