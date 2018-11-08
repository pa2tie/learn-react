window.React = (function() {
  function createElement(element, props, children) {
    if (typeof element === "function") {
      return element();
    } else {
      const domNode = document.createElement(element);
      domNode.innerHTML = children;

      return domNode;
    }
  }

  return {
    createElement
  };
})();

window.ReactDOM = (function() {
  function render(element, domNode) {
    domNode.appendChild(element);
  }

  return {
    render
  };
})();
