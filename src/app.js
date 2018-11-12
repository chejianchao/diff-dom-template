

class App extends Component{

  constructor(){
    super();
    this.component1 = new Component1()
  }

  render(){
    return (<div>
      <h1>{"App"}</h1>
      {this.component1.render()}
    </div>)
  }
}
