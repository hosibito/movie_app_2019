import React from "react";
import axios from "axios";
import Movie from "./Movie";
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // console.log(movies.data.data.movies);
    const {data : { data : { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    //console.log(movies);
    //this.setState({mivies: movies});
    this.setState({ movies, isLoading: false });   
  }

  componentDidMount() {
    // setTimeout(()=>{
    //   this.setState({isLoading:false});
    // }, 6000);
    // const movies = axios.get("https://yts.mx/api/v2/list_movies.json");
    this.getMovies();
  }

  render(){  
    const { isLoading, movies } = this.state;    
    return( 
    <div>
      { isLoading 
        ? "로딩중..." 
        : movies.map(movie => (          
          <Movie 
            key={movie.id} 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
          />      
          ) ) 
      }
    </div>
    );
  }
}

export default App;
