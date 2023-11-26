//framework
import PropTypes from 'prop-types'; 

// scss
import "./main.scss";


function GlobalStyles({ children }) {
  return children;
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalStyles;
