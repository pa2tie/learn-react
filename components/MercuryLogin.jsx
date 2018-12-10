import MercuryInput from "./MercuryInput";
import Panel from "./Panel";

async function loginRequest(payload) {
  const url = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
  let data = JSON.stringify(payload);

  let params = {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: data,
    method: "POST"
  };

  let response = await fetch(url, params);
  let json = await response.json();
  if (response.status == 200) {
    return json;
  } else {
    json.status = response.status;
    return Promise.reject(json);
  }
}

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
      <Panel className="mercury__login login">
        <h2 className="login__header">Log In</h2>
        <form
          className="login__form"
          method="post"
          onSubmit={this.handleSubmit}
        >
          <MercuryInput
            valid={this.state.validEmail}
            value={this.state.email}
            onChange={this.handleChangeEmail}
            placeholder="E-Mail"
            className="login__form-email"
            type="email"
          />
          <MercuryInput
            className="login__form-password"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          {this.state.error && <p className="error-msg">{this.state.error}</p>}
          <button className="btn login__form-btn" type="submit">
            Login
          </button>
        </form>
      </Panel>
    );
  }
}

export default MercuryLogin;
