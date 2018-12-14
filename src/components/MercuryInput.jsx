import React from "react";
import styles from "../css/style.css";

class MercuryInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className={
          this.props.valid || this.props.valid === undefined
            ? this.props.className + " " + styles["mercury-input"]
            : this.props.className +
              " " +
              styles["mercury-input"] +
              " " +
              styles["error-input"]
        }
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
        required
      />
    );
  }
}

export default MercuryInput;
