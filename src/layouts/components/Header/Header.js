// library
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import TippyMessage from "@tippyjs/react";
import { useState, useEffect } from "react";

// scss
import styles from "./Header.module.scss";
import "tippy.js/dist/tippy.css";

// components
import icons from "~/assets/icons";
import { Wrapper as PopperWrapper } from "~/Components/Popper";
import Menu from "~/Components/Popper/Menu";

import {
  faCircleQuestion,
  faCircleXmark,
  faCloudDownload,
  faEarthAsia,
  faEllipsisVertical,
  faJetFighter,
  faKeyboard,
  faPlus,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import AccountItem from "../AccountItem";
import Button from "~/Components/Button";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

// Menu items constant
const MENU_ITEMS = [
  {
    title: "English",
    image: <FontAwesomeIcon icon={faEarthAsia} />,
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Vietnamese",
        },
      ],
    },
  },
  {
    title: "Feedback and help",
    image: <FontAwesomeIcon icon={faCircleQuestion} />,
    to: "/feedback",
  },
  {
    title: "Keyboard shortcuts",
    image: <FontAwesomeIcon icon={faKeyboard} />,
  },
];

// user menu
const USER_ITEMS = [
  {
    title: "View profile",
    image: <FontAwesomeIcon icon={faUser} />,
    to: "/profile",
  },
  {
    title: "Favorites",
    image: <FontAwesomeIcon icon={faCircleQuestion} />,
    to: "/following",
  },
  {
    title: "Settings",
    image: <FontAwesomeIcon icon={faCircleQuestion} />,
    to: "/settings",
  },
  {
    title: "Get Coins",
    image: <FontAwesomeIcon icon={faCircleQuestion} />,
    to: "/coins",
  },
  {
    title: "LIVE Creator Hub",
    image: <FontAwesomeIcon icon={faCircleQuestion} />,
    to: "/live",
  },
  ...MENU_ITEMS,
  {
    title: "Dark mode",
    image: <FontAwesomeIcon icon={faCircleQuestion} />,
  },
  {
    title: "Log out",
    image: <FontAwesomeIcon icon={faCircleQuestion} />,
    to: "/",
    separate: true,
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  let currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);

  // handle function
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // case
        console.log(menuItem);
        break;
      default:
        throw new Error("this field is fixed");
    }
  };

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
          {currentUser ? (
            <>
              <TippyMessage content="Upload" delay={[0, 200]}>
                <button className={cx("user-icon")}>
                  <FontAwesomeIcon icon={faCloudDownload} />
                </button>
              </TippyMessage>

              <button className={cx("user-icon")}>
                <FontAwesomeIcon icon={faJetFighter} />
              </button>
            </>
          ) : (
            <>
              <Button
                outline
                border
                leftIcon={<FontAwesomeIcon icon={faPlus} />}
              >
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          {/* menu */}
          <Menu
            items={currentUser ? USER_ITEMS : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                className={cx("user-avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/07f1e80e2f1def9567b5c97fe411c10e.jpeg?x-expires=1700226000&x-signature=7Ppw8uI0y%2FYThfqBbuLEyzmnxq8%3D"
                alt="avatar"
              />
            ) : (
              <>
                <button className={cx("menu-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
