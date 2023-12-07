// library
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

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
import FollowingAccounts from "~/Components/FollowingAccounts";
import { userService } from "~/apiServices";

const cx = classNames.bind(styles);

// Constant

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
  const [page, setPage] = useState(INIT_PAGE);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [suggestedUser, setSuggestedUser] = useState([]);

  useEffect(() => {
    userService
      .suggested({ page, perPage: PER_PAGE })
      .then((data) => setSuggestedUser((prev) => [...prev, ...data]))
      .catch((error) => console.log(error));
  }, [page]);

  // handle

  const handleViewChange = (isSeeMore) => {
    setIsSeeMore((prevState) => !prevState);

    if (isSeeMore) {
      setPage((prev) => prev + 1);
    } else {
      setSuggestedUser((prev) => prev.slice(0, 5));
    }
  };

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

        {/* following accounts */}
        <FollowingAccounts
          data={suggestedUser}
          title="Following accounts"
          isSeeMore={isSeeMore}
          onSeeMore={handleViewChange}
        />
        <FollowingAccounts
          data={suggestedUser}
          title="Following accounts"
          isSeeMore={isSeeMore}
          onSeeMore={handleViewChange}
        />
        <FollowingAccounts
          data={suggestedUser}
          title="Following accounts"
          isSeeMore={isSeeMore}
          onSeeMore={handleViewChange}
        />
      </aside>
   
  );
}

export default Sidebar;
