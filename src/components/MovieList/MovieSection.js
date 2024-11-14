import React, { Component } from 'react';
import MovieCard from './MovieCard' // Import MovieCard component
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class MovieSection extends Component {
    render() {
        const { title, movies, responsive } = this.props;

        return (
            <div className="movie-section">
                <p className="text-white text-center fs-1 fw-bold mb-5">{title}</p>
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={false}
                    autoPlay={false}
                    showDots={true}
                    keyBoardControl={true}
                    customTransition="transform 0.5s ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {movies.map((movie, index) => (
                        <div key={index} className="carousel-item">
                            <div className="movieCard">
                                <MovieCard movie={movie} />
                            </div>
                        </div>
                    ))}
                </Carousel>
                <div className="btn-viewMore">
                    <button className="btn"><span>XEM THÊM</span></button>
                </div>
            </div>
        );
    }
}

export default MovieSection;
