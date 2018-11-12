

class App extends Component {

  constructor() {
    super();
    this.component1 = new Component1();
  }

  render() {
    return DiffDom.createElement(
      "div",
      null,
      DiffDom.createElement(
        "h1",
        null,
        "App"
      ),
      this.component1.render()
    );
  }
}

class Component1 extends Component {

  constructor() {
    super();
    this.state = { value: 1 };
  }
  add(e) {
    this.setState({ value: this.state.value + 1 });
  }
  render() {
    return DiffDom.createElement(
      "div",
      null,
      DiffDom.createElement(
        "button",
        { onClick: this.add.bind(this) },
        "add"
      ),
      this.state.value
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  DiffDom.renderDom(app, document.getElementById("app"));
});
