// class HelloWorldClass {
//   render() {
//     return <div>Hello World, I'm a {this.props.name}</div>;
//   }
// }

// function HelloWorldFunction(props) {
//   return <div className="hello">Hello World, I'm a {props.name}</div>;
// }

// ReactDOM.render(
//   <div>
//     <HelloWorldFunction name="Awesome Function" />
//     <HelloWorldClass name="Awesome Class" />
//   </div>,
//   document.getElementById("root")
// );

class HelloWorldClass extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello World, I'm a ",
      this.props.name
    );
  }
}

function HelloWorldFunction(props) {
  return React.createElement(
    "div",
    { className: "hello" },
    "Hello World, I'm a ",
    props.name
  );
}

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(HelloWorldFunction, { name: "Awesome Function" }),
  React.createElement(HelloWorldClass, { name: "Awesome Class" })
), document.getElementById("root"));