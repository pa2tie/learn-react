window.React = (function() {
  function isFunction(element) {
    return typeof element === "function";
  }

  function isClass(element) {
    return /class[\s]/.test(element.toString());
  }

  function isString(element) {
    return typeof element === "string";
  }

  function isObject(element) {
    return typeof element === "object";
  }

  function createElement(element, props, ...children) {
    if (isClass(element)) {
      const instance = new element();
      return instance.render();
    }

    if (isFunction(element)) {
      return element();
    }

    if (isString(element)) {
      const domNode = document.createElement(element);
      children.forEach(function(child) {
        if (isObject(child)) {
          domNode.appendChild(child);
        } else {
          domNode.innerHTML = child;
        }
      });

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
