import MercuryLogo from "./components/MercuryLogo";
import MercuryLogin from "./components/MercuryLogin";
import MercuryProfile from "./components/MercuryProfile";
import { Provider } from "./store/Context";
import styles from "./css/style.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
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
      <section className={styles["mercury"]}>
        <Router>
          <div>
            <MercuryLogo />
            <Switch>
              <Provider value={this.state.user}>
                {this.state.user ? (
                  <Route
                    path="/"
                    render={props => <MercuryProfile onLogout={this.logout} />}
                  />
                ) : (
                  <Route
                    path="/"
                    render={props => (
                      <MercuryLogin handleSubmit={this.handleSubmit} />
                    )}
                  />
                )}
              </Provider>
            </Switch>
          </div>
        </Router>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
