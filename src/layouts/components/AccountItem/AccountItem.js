// library
import classNames from "classnames/bind";

// scss
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// components
import Image from "~/Components/Image";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("account-wrapper")}>
      <Image
        className={cx("account-avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/f9f79502fa6f32f1d1984e99e45386df.jpeg?x-expires=1700229600&x-signature=QBGW5soM1uokN1Tg2ijM5I1mI70%3D"
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
