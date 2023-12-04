// framework
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// scss
import styles from "./AccountPreview.module.scss";

// components
import Button from "~/Components/Button";

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("row")}>
        <img src={data.avatar} alt={data.nickname} className={cx("avatar")} />
        <Button primary>Follow</Button>
      </div>
      <div className={cx("info")}>
        <p className={cx("nickname")}>
          <strong>{data.nickname}</strong>
          {data.tick && (
            <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
          )}
        </p>
        <p className={cx("name")}>
          {data.first_name} {data.last_name}
        </p>
        <div className={cx("analytics")}>
          <span className={cx("qtn")}>
            {data.followers_count > 999.999
              ? `${data.followers_count}M`
              : data.followers_count}
          </span>
          <span className={cx("label")}>Followers</span>
          <span className={cx("qtn")}>
            {data.likes_count > 999.999
              ? `${data.likes_count}M`
              : data.likes_count}
          </span>
          <span className={cx("label")}>Likes</span>
        </div>
      </div>
    </div>
  );
}

AccountPreview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountPreview;
