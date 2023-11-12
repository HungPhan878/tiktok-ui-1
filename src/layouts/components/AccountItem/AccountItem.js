// library
import classNames from "classnames/bind";

// scss
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("account-wrapper")}>
      <img
        className={cx("account-avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/337d132142ae8293565481eefb288893.jpeg?x-expires=1699880400&x-signature=U7aWRDjpMovvdU%2FPQhJBBZFj3MU%3D"
        alt="avatar"
      />
      <div className={cx("account-info")}>
        <h4 className={cx("account-name")}>
          <span>kannaCute</span>
          <FontAwesomeIcon
            className={cx("account-icon")}
            icon={faCheckCircle}
          />
        </h4>
        <p className={cx("account-username")}>Kanna Hashimoto</p>
      </div>
    </div>
  );
}

export default AccountItem;
