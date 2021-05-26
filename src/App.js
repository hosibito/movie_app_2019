import React from 'react';
import axios from "axios";
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  }

  componentDidMount() {
    // setTimeout(()=>{
    //   this.setState({isLoading:false});
    // }, 6000);
    // const movies = axios.get("https://yts.mx/api/v2/list_movies.json");
    this.getMovies();
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
