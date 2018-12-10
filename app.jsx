import MercuryLogo from "./components/MercuryLogo";
import MercuryLogin from "./components/MercuryLogin";
import MercuryProfile from "./components/MercuryProfile";
import { Provider } from "./components/Context";

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
      <section className="mercury">
        <MercuryLogo />
        <Provider value={this.state.user}>
          {this.state.user ? (
            <MercuryProfile onLogout={this.logout} />
          ) : (
            <MercuryLogin handleSubmit={this.handleSubmit} />
          )}
        </Provider>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
