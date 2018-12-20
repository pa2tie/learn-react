import React from "react";
import classNames from "classnames";
import styles from "./MercuryButton.css";

class MercuryButton extends React.Component {
  render() {
    const { className, children, ...otherProps } = this.props;
    return (
      <button className={classNames(styles.btn, className)} {...otherProps}>
        {children}
      </button>
    );
  }
}

export default MercuryButton;
