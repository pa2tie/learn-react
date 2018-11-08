// class HelloWorldClass {
//   render() {
//     return <div>Hello World, I'm a class</div>;
//   }
// }

// function HelloWorldFunction() {
//   return <div>Hello World, I'm a function</div>;
// }

// ReactDOM.render(
//   <div>
//     <HelloWorldFunction />
//     <HelloWorldClass />
//   </div>,
//   document.getElementById("root")
// );

class HelloWorldClass {
  render() {
    return React.createElement("div", null, "Hello World, I'm a class");
  }
}

function HelloWorldFunction() {
  return React.createElement("div", null, "Hello World, I'm a function");
}

ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement(HelloWorldFunction, null),
    React.createElement(HelloWorldClass, null)
  ),
  document.getElementById("root")
);
