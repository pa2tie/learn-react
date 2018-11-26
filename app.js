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
    return React.createElement("div", {
      className: "panel" + (this.props.className ? " " + this.props.className : "")
    }, this.props.children);
  }

}

class MercuryProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement(Panel, {
      className: "profile"
    }, React.createElement("img", {
      src: this.props.user.photoUrl,
      alt: "profile-img",
      className: "profile-img"
    }), React.createElement("span", {
      className: "profile-name"
    }, this.props.user.name), React.createElement("button", {
      className: "btn logout-btn",
      type: "submit",
      onClick: this.props.onLogout
    }, "Logout"));
  }

}

class ValidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement("input", {
      className: this.props.valid ? this.props.className : this.props.className + " error-input",
      type: this.props.type,
      name: this.props.name,
      placeholder: this.props.placeholder,
      value: this.props.value,
      onChange: this.props.onChange,
      required: true
    });
  }

}

class MercuryLogin extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", async e => {
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
    });

    _defineProperty(this, "handleChangeEmail", e => {
      this.setState({
        email: e.target.value,
        validEmail: true
      });
    });

    _defineProperty(this, "handleChangePassword", e => {
      this.setState({
        password: e.target.value
      });
    });

    this.state = {
      email: "",
      password: "",
      error: null,
      validEmail: true
    };
  }

  render() {
    return React.createElement(Panel, {
      className: "mercury__login login"
    }, React.createElement("h2", {
      className: "login__header"
    }, "Log In"), React.createElement("form", {
      id: "loginForm",
      className: "login__form",
      method: "post",
      onSubmit: this.handleSubmit
    }, React.createElement(ValidInput, {
      valid: this.state.validEmail,
      value: this.state.email,
      onChange: this.handleChangeEmail,
      placeholder: "E-Mail",
      className: "login__form-email",
      type: "email"
    }), React.createElement("input", {
      className: "login__form-password",
      type: "password",
      name: "password",
      placeholder: "Password",
      value: this.state.password,
      onChange: this.handleChangePassword,
      required: true
    }), this.state.error && React.createElement("p", {
      className: "error-msg"
    }, this.state.error.error), React.createElement("button", {
      className: "btn login__form-btn",
      type: "submit"
    }, "Login")));
  }

}

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

class App extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", user => {
      this.setState({
        user
      });
    });

    _defineProperty(this, "logout", () => {
      this.setState({
        user: null
      });
    });

    this.state = {
      user: null
    };
  }

  render() {
    return React.createElement("section", {
      className: "mercury"
    }, React.createElement(MercuryLogo, null), this.state.user ? React.createElement(MercuryProfile, {
      user: this.state.user,
      onLogout: this.logout
    }) : React.createElement(MercuryLogin, {
      handleSubmit: this.handleSubmit
    }));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
