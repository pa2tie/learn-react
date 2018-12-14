import React from "react";
import MercuryInput from "./MercuryInput";
import Panel from "./Panel";
import styles from "../css/style.css";
import { loginRequest } from "../services/HttpService";

class MercuryLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null,
      validEmail: true
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const user = await loginRequest({
        email: this.state.email,
        password: this.state.password
      });
      this.props.handleSubmit(user);
    } catch (response) {
      switch (response.status) {
        case 400:
          this.setState({
            error: response.error,
            validEmail: false
          });
          break;
        default:
          this.setState({
            error: response.error
          });
          break;
      }
    }
  };

  handleChangeEmail = e => {
    this.setState({
      email: e.target.value,
      validEmail: true
    });
  };

  handleChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    return (
      <Panel className={styles["mercury__login"] + " " + styles["login"]}>
        <h2 className={styles["login__header"]}>Log In</h2>
        <form
          className={styles["login__form"]}
          method="post"
          onSubmit={this.handleSubmit}
        >
          <MercuryInput
            valid={this.state.validEmail}
            value={this.state.email}
            onChange={this.handleChangeEmail}
            placeholder="E-Mail"
            className={styles["login__form-email"]}
            type="email"
          />
          <MercuryInput
            className={styles["login__form-password"]}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          {this.state.error && (
            <p className={styles["error-msg"]}>{this.state.error}</p>
          )}
          <button
            className={styles.btn + " " + styles["login__form-btn"]}
            type="submit"
          >
            Login
          </button>
        </form>
      </Panel>
    );
  }
}

export default MercuryLogin;
