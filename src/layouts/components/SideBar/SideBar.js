// library
import classNames from "classnames/bind";

// scss
import styles from "./Sidebar.module.scss";

// components

const cx = classNames.bind(styles);

function Sidebar() {
  return <aside className={cx("wrapper")}></aside>;
}

export default Sidebar;
