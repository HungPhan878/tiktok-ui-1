// library
import classNames from "classnames/bind";
import PropTypes from "prop-types"; // ES6

// scss
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// components
import Image from "~/Components/Image";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("account-wrapper")}>
      <Image
        className={cx("account-avatar")}
        src={data.avatar}
        alt={data.full_name}
      />
      <div className={cx("account-info")}>
        <h4 className={cx("account-name")}>
          <span>{data.nickname}</span>
          {data.tick && (
            <FontAwesomeIcon
              className={cx("account-icon")}
              icon={faCheckCircle}
            />
          )}
        </h4>
        <p className={cx("account-username")}>{data.full_name}</p>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
