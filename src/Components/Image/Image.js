// library
import { useState, forwardRef } from "react";
import classNames from "classnames/bind";

// scss
import styles from "./Image.module.scss";

// components
import icons from "~/assets/icons";

const cx = classNames.bind(styles);
function Image(
  { alt, src, className, fallback: customFallback = icons.noImage, ...props },
  ref
) {
  const [fallback, setFallback] = useState("");
  const classes = cx("wrapper", {
    [className]: className,
  });

  // handle
  function handleImage() {
    setFallback(customFallback);
  }

  return (
    <img
      className={classes}
      ref={ref}
      alt={alt}
      src={fallback || src}
      {...props}
      onError={handleImage}
    />
  );
}

export default forwardRef(Image);
