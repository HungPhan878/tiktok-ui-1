// library
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // ES6

// scss
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  href,
  to,
  children,
  primary = false,
  outline = false,
  border = false,
  disable = false,
  small = false,
  leftIcon,
  rightIcon,
  onClick,
  className,
  ...states
}) {
  const classes = cx("wrapper", {
    primary,
    outline,
    border,
    disable,
    small,
    [className]: className,
  });

  let Compt = "button";

  const props = {
    onClick,
    ...states,
  };

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (href) {
    props.href = href;
    Compt = "a";
  } else if (to) {
    props.to = to;
    Compt = Link;
  }

  return (
    <Compt className={cx(classes)} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Compt>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  border: PropTypes.bool,
  disable: PropTypes.bool,
  small: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
