// class HelloWorld {
//   render() {
//     return <div>Hello World</div>;
//   }
// }

// ReactDOM.render(
//   <HelloWorld />,
//   document.getElementById("root")
// );

class HelloWorld {
  render() {
    return React.createElement("div", null, "Hello World, I'm class");
  }
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById("root")
);
