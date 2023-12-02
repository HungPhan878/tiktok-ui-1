// framework
import PropTypes from "prop-types";
import classNames from "classnames/bind";

// scss
import styles from "./FollowingAccounts.module.scss";

// components
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function FollowingAccounts({ title }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>{title}</p>
      <div className={cx("account-list")}>
        <AccountItem />
        {/* <AccountItem />
        <AccountItem /> */}
      </div>
      <div>
        <button className={cx("more-btn")}>See more</button>
      </div>
    </div>
  );
}

FollowingAccounts.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FollowingAccounts;
