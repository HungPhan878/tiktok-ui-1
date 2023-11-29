// library
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";

// scss
import styles from "./Sidebar.module.scss";
import config from "~/config";

// components
import Menu from "./Menu";
import { MenuItem } from "./Menu";
import {
  HomeIcon,
  ExploreIcon,
  UserIcon,
  SingleIcon,
  FollowingIconActive,
  ExploreIconActive,
  SingIconActive,
  HomeIconActive,
} from "~/Components/Icons";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For You"
          icon={<HomeIcon />}
          activeIcon={<HomeIconActive />}
          to={config.routes.home}
        />
        <MenuItem
          title="Following"
          icon={<UserIcon />}
          activeIcon={<FollowingIconActive />}
          to={config.routes.following}
        />
        <MenuItem
          title="Explore"
          icon={<ExploreIcon />}
          activeIcon={<ExploreIconActive />}
          to={config.routes.explore}
        />
        <MenuItem
          title="LIVE"
          icon={<FontAwesomeIcon icon={faVideoCamera} />}
          activeIcon={<FontAwesomeIcon icon={faVideoCamera} />}
          to={config.routes.live}
          displayFlex={"flex"}
        />
        <MenuItem
          title="Profile"
          icon={<SingleIcon />}
          activeIcon={<SingIconActive />}
          to={config.routes.profile}
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;
