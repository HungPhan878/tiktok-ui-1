// library
import classNames from "classnames/bind";
import PropTypes from "prop-types";

// scss
import styles from "./DefaultLayout.module.scss";

// components
import Header from "../components/Header";
import SideBar from "../components/SideBar";

// Note
// +children de dua page vao con layout kia la mac dinh
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <main>
        <div className={cx("container")}>
          <SideBar />
          <div className={cx("content")}>{children}</div>
        </div>
      </main>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
