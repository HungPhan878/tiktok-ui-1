// library
import classNames from "classnames/bind";

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

export default MenuItem;
