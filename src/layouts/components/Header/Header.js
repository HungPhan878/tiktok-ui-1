// library
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TippyMessage from "@tippyjs/react";
import { Link } from "react-router-dom";

// scss
import styles from "./Header.module.scss";
import "tippy.js/dist/tippy.css";

// components
import icons from "~/assets/icons";
import Menu from "~/Components/Popper/Menu";

import {
  faEarthAsia,
  faEllipsisVertical,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/Components/Button";
import {
  faEnvelopeOpen,
  faLightbulb,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  Dark,
  Favorites,
  Feedback,
  Keyboard,
  Logout,
  Message,
  Setting,
  Upload,
} from "~/Components/Icons";
import Image from "~/Components/Image";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import Search from "../Search";
import config from "~/config";

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
    image: <Feedback />,
    to: "/feedback",
  },
  {
    title: "Keyboard shortcuts",
    image: <Keyboard />,
  },
];

// user menu
const USER_ITEMS = [
  {
    title: "View profile",
    image: <FontAwesomeIcon icon={faUser} />,
    to: config.routes.profile,
  },
  {
    title: "Favorites",
    image: <Favorites />,
    to: "/following",
  },
  {
    title: "Settings",
    image: <Setting />,
    to: "/settings",
  },
  {
    title: "Get Coins",
    image: <FontAwesomeIcon icon={faBitcoin} />,
    to: "/coins",
  },
  {
    title: "LIVE Creator Hub",
    image: <FontAwesomeIcon icon={faLightbulb} />,
    to: "/live",
  },
  ...MENU_ITEMS,
  {
    title: "Dark mode",
    image: <Dark />,
  },
  {
    title: "Log out",
    image: <Logout />,
    to: "/",
    separate: true,
  },
];

function Header() {
  let currentUser = true;

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
        <Link to={config.routes.home} className={cx("header-logo")}>
          <img src={icons.logo} alt="TIKTOK" />
        </Link>

        {/* search */}
        <Search />

        {/* actions */}
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <TippyMessage content="Upload" delay={[0, 200]}>
                <button className={cx("user-icon")}>
                  <Upload />
                </button>
              </TippyMessage>

              <TippyMessage content="Message" delay={[0, 200]}>
                <button className={cx("user-icon")}>
                  <Message />
                </button>
              </TippyMessage>

              <TippyMessage content="Inbox" delay={[0, 200]}>
                <button className={cx("user-icon", { "user-icon__qnt": true })}>
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </button>
              </TippyMessage>
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
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/e7d66bee6ae558ad37a79c4912763f36~c5_100x100.jpeg?x-expires=1700398800&x-signature=8Nm9A1PA0UHDbcAoDXqo3I9VXrM%3D"
                alt="avatar"
                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
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
