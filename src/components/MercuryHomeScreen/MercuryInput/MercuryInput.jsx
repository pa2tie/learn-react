import React from "react";
import classNames from "classnames";
import styles from "./MercuryInput.css";

class MercuryInput extends React.Component {
  render() {
    const { className, valid = true, ...otherProps } = this.props;
    return (
      <input
        className={classNames(styles["mercury-input"], {
          className,
          [styles["error-input"]]: !valid
        })}
        required
        {...otherProps}
      />
    );
  }
}

export default MercuryInput;
