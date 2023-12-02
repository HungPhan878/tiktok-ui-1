// framework
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

// scss
import styles from "./FollowingAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// components
import { Wrapper as PopperWrapper } from "~/Components/Popper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  // function
  const renderTippy = (attrs) => (
    <div className="box" tabIndex="-1" {...attrs}>
      <PopperWrapper>
        <AccountPreview />
      </PopperWrapper>
    </div>
  );
  return (
    <div>
      <Tippy
        interactive
        // visible
        delay={[800, 0]}
        placement="bottom-start"
        render={renderTippy}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("account-item__avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/337d132142ae8293565481eefb288893.jpeg?x-expires=1701612000&x-signature=FJUONdUlhgmBAXq2fwS1wNWbNlg%3D"
            alt="avatar"
          />

          <div className={cx("account-item__info")}>
            <p className={cx("account-item__nickname")}>
              <strong>callmerabbet</strong>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={cx("account-item__check")}
              />
            </p>
            <p className={cx("account-item__name")}>𝐋𝐢𝐧𝐡 𝐑𝐚𝐛𝐛𝐞𝐭 🐰🤌🏻</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
