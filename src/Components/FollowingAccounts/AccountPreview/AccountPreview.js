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

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("row")}>
        <img
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/337d132142ae8293565481eefb288893.jpeg?x-expires=1701612000&x-signature=FJUONdUlhgmBAXq2fwS1wNWbNlg%3D"
          alt=""
          className={cx("avatar")}
        />
        <Button primary>Follow</Button>
      </div>
      <div className={cx("info")}>
        <p className={cx("nickname")}>
          <strong>callmerabbet</strong>
          <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
        </p>
        <p className={cx("name")}>𝐋𝐢𝐧𝐡 𝐑𝐚𝐛𝐛𝐞𝐭 🐰🤌🏻</p>
      <div className={cx("analytics")}>
        <span className={cx("qtn")}>6.7M</span>
        <span className={cx("label")}>Followers</span>
        <span className={cx("qtn")}>495.9M</span>
        <span className={cx("label")}>Likes</span>
      </div>
      </div>
    </div>
  );
}

export default AccountPreview;
