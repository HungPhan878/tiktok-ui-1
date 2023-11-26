// library
import classNames from "classnames/bind";
import PropTypes from "prop-types";

// scss
import styles from "./Menu.module.scss";

// components
import Button from "~/Components/Button";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
  });

  return (
    <Button
      leftIcon={data.image}
      to={data.to}
      className={classes}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
