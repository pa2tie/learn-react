// className AuthForm {
//   render() {
//     return (
//       <section className="authorization">
//         <div className="logo">
//             <a href="#" className="logo"><img src="assets/img/w-mercury-development.svg" alt="mercury-logo"></a>
//         </div>
//         <div className="login">
//             <div className="login-form-wrapper">
//                 <h2 className="login-header">Log In</h2>
//                 <form id="loginForm" className="login__form" method="post">
//                     <input className="login__form-email" type="email" name="email" placeholder="E-Mail" />
//                     <input className="login__form-password" type="password" name="password" placeholder="Password">
//                     <button className="btn login-btn" type="submit">Login</button>
//                 </form>
//             </div>
//         </div>
//       </section>
//     );
//   }
// }

// ReactDOM.render(
//   <AuthForm/>,
//   document.getElementById("root");
// );

class AuthForm extends React.Component {
  render() {
    return React.createElement(
      "section",
      { "className": "authorization" },
      React.createElement(
        "div",
        { "className": "logo" },
        React.createElement(
          "a",
          { href: "#", "className": "logo" },
          React.createElement("img", { src: "assets/img/w-mercury-development.svg", alt: "mercury-logo" })
        )
      ),
      React.createElement(
        "div",
        { "className": "login" },
        React.createElement(
          "div",
          { "className": "login-form-wrapper" },
          React.createElement(
            "h2",
            { "className": "login-header" },
            "Log In"
          ),
          React.createElement(
            "form",
            { id: "loginForm", "className": "login__form", method: "post" },
            React.createElement("input", { "className": "login__form-email", type: "email", name: "email", placeholder: "E-Mail" }),
            React.createElement("input", { "className": "login__form-password", type: "password", name: "password", placeholder: "Password" }),
            React.createElement(
              "button",
              { "className": "btn login-btn", type: "submit" },
              "Login"
            )
          )
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(AuthForm, null), document.getElementById("root"));