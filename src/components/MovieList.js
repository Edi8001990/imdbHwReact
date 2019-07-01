import React, {Component, Fragment} from 'react';
import Movie from './Movie';

class MovieList extends Component{

    render(){

        const movieComponents = this.props.movies.map((movieData)=>{
          return(
            <Movie
            title={movieData.name}
            key={movieData.id}
            url={movieData.url}>
            </Movie>
          )
        })

        return(
          <Fragment>
          {movieComponents}
          </Fragment>
        )

    }

}

export default MovieList;
