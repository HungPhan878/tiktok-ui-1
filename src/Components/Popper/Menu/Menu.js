// library
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import PropTypes from "prop-types";
// scss
import styles from "./Menu.module.scss";

// components
import { Wrapper as PopperWrapper } from "~/Components/Popper";
import MenuItem from "./MenuItem";
import HeaderMenu from "./HeaderMenu";

const cx = classNames.bind(styles);
function Menu({
  items = [],
  children,
  onChange = () => {},
  hideOnClick = false,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  // handle

  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  // function
  const renderMenuItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const renderMenu = (attrs) => (
    <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx("menu-popper")}>
        {history.length > 1 && (
          <HeaderMenu title={current.title} onBack={handleBack} />
        )}
        <div className={cx("menu-body")}>{renderMenuItem()}</div>
      </PopperWrapper>
    </div>
  );

  return (
    <div>
      <Tippy
        // visible
        interactive
        delay={[0, 700]}
        offset={[12, 14]}
        placement="bottom-end"
        render={renderMenu}
        onHide={handleReset}
        hideOnClick={hideOnClick}
      >
        {children}
      </Tippy>
    </div>
  );
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
};

export default Menu;
