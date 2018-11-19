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
      email: "user@example.com",
      password: "mercdev",
      user: null
    };

  }

  handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const loginResponse = await loginRequest({
          email: this.state.email,
          password: this.state.password
        });
        const user = loginResponse.json();
        this.setState({
          user
        });
      } catch (e) {
        this.setState({
          //add more errors
          error: "Something went wrong"
        });
      }
  }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  logout = () => {
    this.setState({
      user: null
    });
  }

  render() {
    return (
      <MercuryAuth email={this.state.email} password={this.state.password} user={this.state.user} updateEmail={this.handleChangeEmail} updatePassword={this.handleChangePassword}/>
    );
  }
}


const MercuryAuth = (props) => {
  this.props = props;
  handleChangeEmail = (e) => {
    this.props.updateEmail(e);
  }

  handleChangePassword = (e) => {
    this.props.updatePassword(e);
  }

  return (
    <section className="mercury">
      <MercuryLogo/>
      { this.props.user ? (<MercuryProfile user={this.props.user}/>) : (<MercuryLogin error={this.props.error} email={this.props.email} password={this.props.password} updateEmail={this.handleChangeEmail} updatePassword={this.handleChangePassword}/>) }
    </section>
  );
}

const MercuryLogo = () => {
  return (
    <div className="mercury__logo">
        <a href="#" className="logo"><img src="assets/img/w-mercury-development.svg" alt="mercury-logo"/></a>
    </div>
  );
}

const MercuryLogin = (props) => {
  this.props = props;
  handleChangeEmail = (e) => {
    this.props.updateEmail(e);
  }

  handleChangePassword = (e) => {
    this.props.updatePassword(e);
  }

  return (
    <div className="mercury__login login">
      <h2 className="login__header">Log In</h2>
      <LoginForm email={this.props.email} password={this.props.password} updateEmail={this.handleChangeEmail} updatePassword={this.handleChangePassword}/>
    </div>
  );
}

const LoginForm = (props) => {
  this.props = props;
  handleChangeEmail = (e) => {
    this.props.updateEmail(e);
  }

  handleChangePassword = (e) => {
    this.props.updatePassword(e);
  }

  return (
    <form id="loginForm" className="login__form" method="post" onSubmit={this.handleSubmit}>
        <input className="login__form-email" type="email" name="email" placeholder="E-Mail" value={this.props.email} onChange={this.handleChangeEmail} required/>
        <input className="login__form-password" type="password" name="password" placeholder="Password" value={this.props.password} onChange={this.handleChangePassword} required/>
        {this.props.error && <p className="error-msg">{this.props.error}</p>}
        <button className="btn login__form-btn" type="submit">Login</button>
    </form>
  );
}

class ValidInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: true
    };
  }

  render() {
    return (
      <input className={this.state.valid ? "login__form-email" : "login__form-email error-input"} type="email" name="email" placeholder="E-Mail" value={this.props.email} onChange={this.handleChangeEmail} required/>
    );
  }
}

const MercuryProfile = (props) => {
  this.props = props;
  return (
    <div className="profile">
      <img src="" alt="profile-img" className="profile-img"/>
      <span className="profile-name"></span>
      <button className="btn logout-btn" type="submit">Logout</button>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);