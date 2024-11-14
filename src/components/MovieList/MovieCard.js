import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../HomePage/Movie/styles.css'

class MovieCard extends Component {
    render() {
        const { movie } = this.props; // Movie passed from parent component
        return (
            <React.Fragment>
                <div className="movieContainer">
                    <div className="imageContainer">
                        <img className="imageMovie" src={movie.image} alt={movie.title} />
                        <div className="content text-white">
                            <p className="nameMovie fs-3 fw-bold">{movie.title}</p>
                            <div className="d-flex align-items-center gap-2">
                                <i className="fa-solid fa-tags"></i>
                                <p>Thể loại: {movie.genre}</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <i className="fa-regular fa-clock"></i>
                                <p>Thời lượng: {movie.duration}</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <i className="fa-solid fa-earth-asia"></i>
                                <p>Quốc gia : {movie.country}</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <i className="fa-regular fa-comment-dots"></i>
                                <p>Phụ đề : {movie.country}</p>
                            </div>
                        </div>
                    </div>
                    <div className="titleName">
                        {movie.title}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MovieCard;
