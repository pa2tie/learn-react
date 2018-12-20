import React from "react";
import ReactDOM from "react-dom";
import MercuryLogo from "./MercuryLogo/MercuryLogo";
import MercuryLogin from "./MercuryLogin/MercuryLogin";
import MercuryProfile from "./MercuryProfile/MercuryProfile";
import { Provider } from "../../store/Context";
import styles from "./MercuryHomeScreen.css";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class MercuryHomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  handleSubmit = user => {
    this.setState({
      user
    });
  };

  logout = () => {
    this.setState({
      user: null
    });
  };

  render() {
    return (
      <Provider
        value={{
          user: this.state.user,
          onLogout: this.logout,
          handleSubmit: this.handleSubmit
        }}
      >
        <section className={styles["mercury"]}>
          <MercuryLogo href="#/login" />
          {this.state.user ? (
            <Switch>
              <Route exact path="/profile" component={MercuryProfile} />
              <Redirect to="/profile" />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/login" component={MercuryLogin} />
              <Redirect to="/login" />
            </Switch>
          )}
        </section>
      </Provider>
    );
  }
}

export default MercuryHomeScreen;
