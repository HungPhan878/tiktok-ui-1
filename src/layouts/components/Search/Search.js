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
import { useDebounce } from "~/hooks";
import * as searchService from "~/apiServices";
import RenderSearch from "./RenderSearch";

const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue, 500);
  const inputRef = useRef();

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    // call api
    const fetchApi = async () => {
      setLoading(true);

      const res = await searchService.search(debounceValue);

      setSearchResult(res);
      setLoading(false);
    };

    fetchApi();
  }, [debounceValue]);

  //   handle function
  function handleClear() {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  }

  function handleHideResult() {
    setShowResult(false);
  }

  // handle loai bo space
  // hong ghi vao effect vi se bi render hong can thiet nen ghi vao day se it bi render hon.
  function handleChange(e) {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(" ")) {
      setSearchValue(e.target.value);
    }
  }

  // handle render

  const handleRender = (attrs) => (
    <div className={cx("search-result")} tabIndex="-1" {...attrs}>
      <PopperWrapper>
        <div className={cx("search-inner")}>
          <p className={cx("search-title")}>Accounts</p>
          <RenderSearch data={searchResult} />
        </div>
      </PopperWrapper>
    </div>
  );

  return (
    <div>
      <Tippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={handleRender}
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
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />

          {/* clear */}
          {!!searchValue && !loading && (
            <button className={cx("search-clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {/* loading */}
          {loading && (
            <FontAwesomeIcon
              icon={faSpinner}
              className={cx("search-loading")}
            />
          )}

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
