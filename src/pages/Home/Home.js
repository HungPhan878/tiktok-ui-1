// library
import classNames from "classnames/bind";

// scss
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
    return ( <h1 className={cx("wrapper")}>Home Page
    </h1> );
}

export default Home;