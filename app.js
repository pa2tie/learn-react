// function HelloWorld() {
//   return (
//     <div>
//       Hello World
//     </div>
//   );
// }

// ReactDOM.render(
//   <HelloWorld />,
//   document.getElementById("root")
// );

function HelloWord() {
  return React.createElement("div", null, "Hello World! I'm a function!");
}

ReactDOM.render(
  React.createElement(HelloWord),
  document.getElementById("root")
);
