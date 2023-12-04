// framework
import PropTypes from "prop-types";
import classNames from "classnames/bind";

// scss
import styles from "./FollowingAccounts.module.scss";

// components
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function FollowingAccounts({ title, data = [], onSeeMore, isSeeMore }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>{title}</p>
      <div className={cx("account-list")}>
        {data.map((account) => (
          <AccountItem key={account.id} data={account} />
        ))}
      </div>
      <div>
        <button
          className={cx("more-btn")}
          onClick={() => onSeeMore(!isSeeMore)}
        >
          {isSeeMore ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );
}

FollowingAccounts.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
  onSeeMore: PropTypes.func,
  isSeeMore: PropTypes.bool,
};

export default FollowingAccounts;
