import React from "react";
import ReactDOM from "react-dom";
import MercuryLogo from "./MercuryLogo/MercuryLogo";
import MercuryLogin from "./MercuryLogin/MercuryLogin";
import MercuryProfile from "./MercuryProfile/MercuryProfile";
import { Provider } from "../../store/Context";
import styles from "./MercuryHomeScreen.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class MercuryHomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this.props.history.push("/login");
  }

  handleSubmit = user => {
    this.setState({
      user
    });
    this.props.history.push("/profile");
  };

  logout = () => {
    this.setState({
      user: null
    });
    this.props.history.push("/login");
  };

  render() {
    return (
      <section className={styles["mercury"]}>
        <MercuryLogo href="#/login" />
        <Switch>
          <Provider value={this.state.user}>
            {this.state.user && (
              <Route
                exact
                path="/profile"
                render={props => <MercuryProfile onLogout={this.logout} />}
              />
            )}
            <Route
              exact
              path="/login"
              render={props => (
                <MercuryLogin handleSubmit={this.handleSubmit} />
              )}
            />
          </Provider>
        </Switch>
      </section>
    );
  }
}

export default MercuryHomeScreen;
