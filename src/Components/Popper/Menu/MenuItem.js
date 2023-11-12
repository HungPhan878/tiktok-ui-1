// library
import classNames from "classnames/bind";

// scss
import styles from "./Menu.module.scss";

// components
import Button from "~/Components/Button";

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <Button leftIcon={data.image} to={data.to} className={cx("menu-item")}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
