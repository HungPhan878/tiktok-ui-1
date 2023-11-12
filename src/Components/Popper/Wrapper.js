// library
import classNames from "classnames/bind";

// scss
import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);

function Wrapper({ className, children }) {
  return <div className={cx("wrapper", className  )}>{children}</div>;
}

export default Wrapper;
