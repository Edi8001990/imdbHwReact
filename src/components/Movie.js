import React, {Component} from 'react';

class Movie extends Component{
  render(){

      return(
        <div className="movie">
            <li><a href={this.props.url} target="_blank">{this.props.title}</a></li>
        </div>
      )

  }
}

export default Movie;
