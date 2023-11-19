// framework
import Tippy from "@tippyjs/react/headless";
import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";

// scss
import styles from "./Search.module.scss";

// components
import { Wrapper as PopperWrapper } from "~/Components/Popper";
import AccountItem from "../AccountItem";

const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);

  //   handle function
  function handleClear() {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  }

  function handleHideResult() {
    setShowResult(false);
  }

  return (
    <div>
      <Tippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className={cx("search-inner")}>
                <p className={cx("search-title")}>Accounts</p>

                <AccountItem />
                <AccountItem />
                <AccountItem />
              </div>
            </PopperWrapper>
          </div>
        )}
        placement="bottom-start"
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search"
            spellCheck={false}
            className={cx("search-input")}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />

          {/* clear */}
          {!!searchValue && (
            <button className={cx("search-clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {/* loading */}
          {/* <FontAwesomeIcon icon={faSpinner} className={cx("search-loading")} /> */}

          {/* btn */}
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
