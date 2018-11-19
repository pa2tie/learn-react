function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _defineProperty(this, "handleSubmit", async e => {
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
    });

    _defineProperty(this, "handleChangeEmail", e => {
      this.setState({
        email: e.target.value
      });
    });

    _defineProperty(this, "handleChangePassword", e => {
      this.setState({
        password: e.target.value
      });
    });

    _defineProperty(this, "logout", () => {
      this.setState({
        user: null
      });
    });

    this.state = {
      email: "user@example.com",
      password: "mercdev",
      user: null
    };
  }

  render() {
    return React.createElement(MercuryAuth, {
      email: this.state.email,
      password: this.state.password,
      user: this.state.user,
      updateEmail: this.handleChangeEmail,
      updatePassword: this.handleChangePassword
    });
  }

}

const MercuryAuth = props => {
  this.props = props;

  handleChangeEmail = e => {
    this.props.updateEmail(e);
  };

  handleChangePassword = e => {
    this.props.updatePassword(e);
  };

  return React.createElement("section", {
    className: "mercury"
  }, React.createElement(MercuryLogo, null), this.props.user ? React.createElement(MercuryProfile, {
    user: this.props.user
  }) : React.createElement(MercuryLogin, {
    error: this.props.error,
    email: this.props.email,
    password: this.props.password,
    updateEmail: this.handleChangeEmail,
    updatePassword: this.handleChangePassword
  }));
};

const MercuryLogo = () => {
  return React.createElement("div", {
    className: "mercury__logo"
  }, React.createElement("a", {
    href: "#",
    className: "logo"
  }, React.createElement("img", {
    src: "assets/img/w-mercury-development.svg",
    alt: "mercury-logo"
  })));
};

const MercuryLogin = props => {
  this.props = props;

  handleChangeEmail = e => {
    this.props.updateEmail(e);
  };

  handleChangePassword = e => {
    this.props.updatePassword(e);
  };

  return React.createElement("div", {
    className: "mercury__login login"
  }, React.createElement("h2", {
    className: "login__header"
  }, "Log In"), React.createElement(LoginForm, {
    email: this.props.email,
    password: this.props.password,
    updateEmail: this.handleChangeEmail,
    updatePassword: this.handleChangePassword
  }));
};

const LoginForm = props => {
  this.props = props;

  handleChangeEmail = e => {
    this.props.updateEmail(e);
  };

  handleChangePassword = e => {
    this.props.updatePassword(e);
  };

  return React.createElement("form", {
    id: "loginForm",
    className: "login__form",
    method: "post",
    onSubmit: this.handleSubmit
  }, React.createElement("input", {
    className: "login__form-email",
    type: "email",
    name: "email",
    placeholder: "E-Mail",
    value: this.props.email,
    onChange: this.handleChangeEmail,
    required: true
  }), React.createElement("input", {
    className: "login__form-password",
    type: "password",
    name: "password",
    placeholder: "Password",
    value: this.props.password,
    onChange: this.handleChangePassword,
    required: true
  }), this.props.error && React.createElement("p", {
    className: "error-msg"
  }, this.props.error), React.createElement("button", {
    className: "btn login__form-btn",
    type: "submit"
  }, "Login"));
};

class ValidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: true
    };
  }

  render() {
    return React.createElement("input", {
      className: this.state.valid ? "login__form-email" : "login__form-email error-input",
      type: "email",
      name: "email",
      placeholder: "E-Mail",
      value: this.props.email,
      onChange: this.handleChangeEmail,
      required: true
    });
  }

}

const MercuryProfile = props => {
  this.props = props;
  return React.createElement("div", {
    className: "profile"
  }, React.createElement("img", {
    src: "",
    alt: "profile-img",
    className: "profile-img"
  }), React.createElement("span", {
    className: "profile-name"
  }), React.createElement("button", {
    className: "btn logout-btn",
    type: "submit"
  }, "Logout"));
};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
