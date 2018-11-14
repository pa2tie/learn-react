// className AuthForm {
//   render() {
//     return (
//       <section className="mercury">
//         <div className="mercury__logo">
//             <a href="#" className="logo"><img src="assets/img/w-mercury-development.svg" alt="mercury-logo"/></a>
//         </div>
//         <div className="mercury__login login">
//             <h2 className="login__header">Log In</h2>
//             <form id="loginForm" className="login__form" method="post">
//                 <input className="login__form-email" type="email" name="email" placeholder="E-Mail" required/>
//                 <input className="login__form-password" type="password" name="password" placeholder="Password" required/>
//                 <button className="btn login__form-btn" type="submit">Login</button>
//             </form>
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
      { "className": "mercury" },
      React.createElement(
        "div",
        { "className": "mercury__logo" },
        React.createElement(
          "a",
          { href: "#", "className": "logo" },
          React.createElement("img", { src: "assets/img/w-mercury-development.svg", alt: "mercury-logo" })
        )
      ),
      React.createElement(
        "div",
        { "className": "mercury__login login" },
        React.createElement(
          "h2",
          { "className": "login__header" },
          "Log In"
        ),
        React.createElement(
          "form",
          { id: "loginForm", "className": "login__form", method: "post" },
          React.createElement("input", { "className": "login__form-email", type: "email", name: "email", placeholder: "E-Mail", required: true }),
          React.createElement("input", { "className": "login__form-password", type: "password", name: "password", placeholder: "Password", required: true }),
          React.createElement(
            "button",
            { "className": "btn login__form-btn", type: "submit" },
            "Login"
          )
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(AuthForm, null), document.getElementById("root"));