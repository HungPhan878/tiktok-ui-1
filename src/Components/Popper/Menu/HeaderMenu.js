// library
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

// scss
import styles from "./Menu.module.scss";

// components

const cx = classNames.bind(styles);

function HeaderMenu({ title, onBack }) {
  return (
    <div className={cx("header-menu")}>
      <button className={cx("header-menu__btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx("header-menu__title")}>{title}</h4>
    </div>
  );
}

export default HeaderMenu;
