// library
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// scss
import styles from "./Header.module.scss";

// components
import icons from "~/assets/icons";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("header-inner")}>
        {/* logo */}
        <div className={cx("header-logo")}>
          <img src={icons.logo} alt="TIKTOK" />
        </div>

        {/* search */}
        <div className={cx("search")}>
          <input placeholder="Search" spellCheck={false} 
          className={cx("search-input")}
          />

          {/* clear */}
          <button className={cx("search-clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

          {/* loading */}
          <FontAwesomeIcon icon={faSpinner} className={cx("search-loading")}/>

          {/* btn */}
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* actions */}
        <div className={cx("actions")}></div>
      </div>
    </header>
  );
}

export default Header;
