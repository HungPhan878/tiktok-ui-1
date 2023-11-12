// library
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

// scss
import styles from "./Menu.module.scss";

// components
import { Wrapper as PopperWrapper } from "~/Components/Popper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);
function Menu({ items, children }) {
  // function
  const renderMenuItem = () => {
    return items.map((items, index) => <MenuItem key={index} data={items} />);
  };

  return (
    <div>
      <Tippy
        interactive
        delay={[0, 700]}
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
              {renderMenuItem()}
            </PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;
