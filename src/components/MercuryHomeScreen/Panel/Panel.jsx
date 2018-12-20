import React from "react";
import classNames from "classnames";
import styles from "./Panel.css";

class Panel extends React.Component {
  render() {
    const { className, children, ...otherProps } = this.props;
    return (
      <div className={classNames(styles["panel"], className)} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default Panel;
