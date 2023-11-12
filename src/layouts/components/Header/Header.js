// library
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import { useState, useEffect } from "react";

// scss
import styles from "./Header.module.scss";

// components
import icons from "~/assets/icons";
import { Wrapper as PopperWrapper } from "~/Components/Popper";
import Menu from "~/Components/Popper/Menu";

import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faPlus,
  faSearch,
  faSpinner,
 
} from "@fortawesome/free-solid-svg-icons";
import AccountItem from "../AccountItem";
import Button from "~/Components/Button";

const cx = classNames.bind(styles);

// Menu items constant
const MENU_ITEMS = [
  {
    title: "English",
    image: <FontAwesomeIcon icon={faEarthAsia}/>,

  },
  {
    title: "Feedback and help",
    image: <FontAwesomeIcon icon={faCircleQuestion}/>,
    to: "/feedback",

  },
  {
    title: "Keyboard shortcuts",
    image: <FontAwesomeIcon icon={faKeyboard}/>,

  },
]

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);

  return (
    <header className={cx("header")}>
      <div className={cx("header-inner")}>
        {/* logo */}
        <div className={cx("header-logo")}>
          <img src={icons.logo} alt="TIKTOK" />
        </div>

        {/* search */}
        <div>
          <Tippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <div className={cx("search-inner")}>
                    <p className={cx("search-title")}>Accounts</p>

                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                  </div>
                </PopperWrapper>
              </div>
            )}
            placement="bottom-start"
          >
            <div className={cx("search")}>
              <input
                placeholder="Search"
                spellCheck={false}
                className={cx("search-input")}
              />

              {/* clear */}
              <button className={cx("search-clear")}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>

              {/* loading */}
              <FontAwesomeIcon
                icon={faSpinner}
                className={cx("search-loading")}
              />

              {/* btn */}
              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </Tippy>
        </div>

        {/* actions */}
        <div className={cx("actions")}>
          <Button outline border leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button primary>Log in</Button>

          {/* menu */}
         <Menu items={MENU_ITEMS}>
            <button className={cx("menu-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
         </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
