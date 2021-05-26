import React from 'react';
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({isLoading:false});
    }, 6000);
  }

  render(){  
    const { isLoading } = this.state;
    return( 
    <div>
      { isLoading ? "로딩중..." : "준비가 완료되었습니다." }
    </div>
    );
  }
}

export default App;
