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

function AccountItem({ data }) {
  // function
  const renderTippy = (attrs) => (
    <div className="box" tabIndex="-1" {...attrs}>
      <PopperWrapper>
        <AccountPreview data={data}/>
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
            src={data.avatar}
            alt={data.nickname}
          />

          <div className={cx("account-item__info")}>
            <p className={cx("account-item__nickname")}>
              <strong>{data.nickname}</strong>
              {data.tick && (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className={cx("account-item__check")}
                />
              )}
            </p>
            <p className={cx("account-item__name")}>
              {data.first_name} {data.last_name}
            </p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
