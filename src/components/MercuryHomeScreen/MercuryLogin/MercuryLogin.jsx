import React from "react";
import MercuryInput from "../MercuryInput/MercuryInput";
import Panel from "../Panel/Panel";
import MercuryButton from "../MercuryButton/MercuryButton";
import styles from "./MercuryLogin.css";
import { postRequest } from "../../../services/HttpService";
import { Consumer } from "../../../store/Context";

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

  handleSubmit = async (e, contextHandleSubmit) => {
    e.preventDefault();
    try {
      const url =
        "https://us-central1-mercdev-academy.cloudfunctions.net/login";
      let payload = {
        email: this.state.email,
        password: this.state.password
      };
      const user = await postRequest({ url, payload });
      contextHandleSubmit(user);
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
      <Consumer>
        {context => (
          <Panel className={styles["mercury__login"] + " " + styles["login"]}>
            <h2 className={styles["login__header"]}>Log In</h2>
            <form
              className={styles["login__form"]}
              method="post"
              onSubmit={e => this.handleSubmit(e, context.handleSubmit)}
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
              <MercuryButton
                className={styles["login__form-btn"]}
                type="submit"
              >
                Login
              </MercuryButton>
            </form>
          </Panel>
        )}
      </Consumer>
    );
  }
}

export default MercuryLogin;
