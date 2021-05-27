import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    console.log("constructor!!  ( 1 )");
  }

  state ={
    count:0
  };

  add = () => {
    //this.state.count = 1;   // 이렇게 변경이 안된다. 또한  render 하지 않아 화면에 반영이 안된다. 
      // Line 10:5:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state 경고뜬다.
    // this.setState({ count: this.state.count + 1 })  이렇게 사용하면 좋지 못하다. 
    this.setState( current => ( { count: current.count + 1 } ) )  // setState 에서 현제 스테더스값을 제공한다. 
  
  };
  minus = () => {
    //this.setState({ count: this.state.count - 1})
    this.setState( current => ( { count: current.count - 1 } ) )
  };

  componentDidMount(){
    console.log("componentDidMount!! ( 3 )")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate!! 더하기 뺴기 눌렀을때!! ")
  }

  componentWillUnmount(){
    console.log("componentWillUnmount 닫거나 다른창으로 갈때!! ")
  }

  render(){
    console.log("render!  ( 2 )")
    return( 
    <div>
      <h1>클래스 컴포넌트 스테이트 숫자 : {this.state.count}</h1>
      <button onClick={this.add}>더하기</button>
      <button onClick={this.minus}>빼기</button>
    </div>
    );
  }
}

export default App;
