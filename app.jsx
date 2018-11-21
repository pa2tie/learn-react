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

  return await fetch(url, params);
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      user: null,
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
      console.log(user);
      if (loginResponse.status == 200) {
        this.setState({
          user
        });
      } else {
        switch (loginResponse.status) {
          case 400:
            this.setState({
              error: user,
              validEmail: false
            });
            break;
          default:
            this.setState({
              error: user
            });
            break;
        }
      }
    } catch (e) {
      this.setState({
        error: "Something went wrong"
      });
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

  logout = () => {
    this.setState({
      user: null,
      error: null,
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <section className="mercury">
        <MercuryLogo />
        {this.state.user ? (
          <MercuryProfile user={this.state.user} onSubmit={this.logout} />
        ) : (
          <MercuryLogin
            validEmail={this.state.validEmail}
            error={this.state.error}
            email={this.state.email}
            password={this.state.password}
            updateEmail={this.handleChangeEmail}
            updatePassword={this.handleChangePassword}
            handleSubmit={this.handleSubmit}
          />
        )}
      </section>
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

class MercuryLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="mercury__login login">
        <h2 className="login__header">Log In</h2>
        <form
          id="loginForm"
          className="login__form"
          method="post"
          onSubmit={this.props.handleSubmit}
        >
          <ValidEmailInput
            valid={this.props.validEmail}
            value={this.props.email}
            onChange={this.props.updateEmail}
          />
          <input
            className="login__form-password"
            type="password"
            name="password"
            placeholder="Password"
            value={this.props.password}
            onChange={this.props.updatePassword}
            required
          />
          {this.props.error && (
            <p className="error-msg">{this.props.error.error}</p>
          )}
          <button className="btn login__form-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

class ValidEmailInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <input
        className={
          this.props.valid
            ? "login__form-email"
            : "login__form-email error-input"
        }
        type="email"
        name="email"
        placeholder="E-Mail"
        value={this.props.value}
        onChange={this.props.onChange}
        required
      />
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
      <div className="profile">
        <img
          src={this.props.user.photoUrl}
          alt="profile-img"
          className="profile-img"
        />
        <span className="profile-name">{this.props.user.name}</span>
        <button
          className="btn logout-btn"
          type="submit"
          onClick={this.props.onSubmit}
        >
          Logout
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
