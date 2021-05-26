import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state ={
    count:0
  };

  add = () => {
    console.log("더하기")
  };
  minus = () => {
    console.log("빼기")
  };


  render(){
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
