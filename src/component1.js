
class Component1 extends Component{

  constructor(){
    super();
    this.state = {value:1}
  }
  add(e){
    this.setState({value:this.state.value+1})
  }
  render(){
    return <div>
              <button onClick={this.add.bind(this)}>add</button>
              {this.state.value}
          </div>
  }
}
