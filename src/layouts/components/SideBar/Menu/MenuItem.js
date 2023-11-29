// framework
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

// scss
import styles from "./Menu.module.scss";

// components

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink
      to={to}
      className={(nav) => cx("menu-item", { active: nav.isActive })}
    >
      <span className={cx("menu-item__icon")}>{icon}</span>
      <span className={cx("menu-item__icon-active")}>{activeIcon}</span>
      <span className={cx("menu-item__title")}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {  
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
