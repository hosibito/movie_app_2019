import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
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
      <div className="container">
        { isLoading 
          ? (
            <div className="loader"> 
              <span className="loader__text">로딩중....</span>
            </div>
          ) : movies.map ( movie => (  
            <div className="movies">        
              <Movie 
                id={movie.id}  
                key={movie.id}                 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />  
            </div>    
          )) 
        }
      </div>
    );
  }
}

export default App;
