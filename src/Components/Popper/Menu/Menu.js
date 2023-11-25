// library
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

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

  return (
    <div>
      <Tippy
        // visible
        interactive
        delay={[0, 700]}
        offset={[12, 14]}
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
              {history.length > 1 && (
                <HeaderMenu
                  title="Language"
                  onBack={() =>
                    setHistory((prev) => prev.slice(0, prev.length - 1))
                  }
                />
              )}
              <div className={cx("menu-body")}>{renderMenuItem()}</div>
            </PopperWrapper>
          </div>  
        )}
        onHide={() => setHistory((prev) => prev.slice(0, 1))}
        hideOnClick={hideOnClick}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;
