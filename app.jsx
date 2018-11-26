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
  if (response.status == 200) {
    return response;
  } else {
    return Promise.reject(response);
  }
}

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={
          "panel" + (this.props.className ? " " + this.props.className : "")
        }
      >
        {this.props.children}
      </div>
    );
  }
}

class MercuryProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Panel className="profile">
        <img
          src={this.props.user.photoUrl}
          alt="profile-img"
          className="profile-img"
        />
        <span className="profile-name">{this.props.user.name}</span>
        <button
          className="btn logout-btn"
          type="submit"
          onClick={this.props.onLogout}
        >
          Logout
        </button>
      </Panel>
    );
  }
}

class ValidInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <input
        className={
          this.props.valid
            ? this.props.className
            : this.props.className + " error-input"
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
      const loginResponse = await loginRequest({
        email: this.state.email,
        password: this.state.password
      });
      const user = await loginResponse.json();
      this.props.handleSubmit(user);
    } catch (response) {
      const error = await response.json();
      switch (response.status) {
        case 400:
          this.setState({
            error,
            validEmail: false
          });
          break;
        default:
          this.setState({
            error
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
          id="loginForm"
          className="login__form"
          method="post"
          onSubmit={this.handleSubmit}
        >
          <ValidInput
            valid={this.state.validEmail}
            value={this.state.email}
            onChange={this.handleChangeEmail}
            placeholder="E-Mail"
            className="login__form-email"
            type="email"
          />
          <input
            className="login__form-password"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChangePassword}
            required
          />
          {this.state.error && (
            <p className="error-msg">{this.state.error.error}</p>
          )}
          <button className="btn login__form-btn" type="submit">
            Login
          </button>
        </form>
      </Panel>
    );
  }
}

const MercuryLogo = () => {
  return (
    <div className="mercury__logo">
      <a href="#" className="logo">
        <img src="assets/img/w-mercury-development.svg" alt="mercury-logo" />
      </a>
    </div>
  );
};

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
        {this.state.user ? (
          <MercuryProfile user={this.state.user} onLogout={this.logout} />
        ) : (
          <MercuryLogin handleSubmit={this.handleSubmit} />
        )}
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
