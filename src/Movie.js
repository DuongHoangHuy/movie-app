import React from 'react'
import PropTypes from 'prop-types'
import "./Movie.css"

function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie-data">
                <h3 className="movie-title">{title}</h3>
                <h5 className="movie-year">{year}</h5>
                <ul className="movie-genres">
                    {genres.map((genre, i)=> (<li className="movie-genre" key={`genre_${i}`} >{genre}</li>))}
                </ul>
                <p className="movie-summary">{summary.substring(0, 200)}</p>
                
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie