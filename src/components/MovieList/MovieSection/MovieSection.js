import React, { Component } from 'react';
import MovieCard from '../MovieCard'; // Import MovieCard component
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles.css';

class MovieSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: false
        };
    }

    toggleView = () => {
        this.setState({ showList: !this.state.showList });
    };

    render() {
        const { title, movies } = this.props;
        const { showList } = this.state;

        // Cấu hình responsive cho Carousel
        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 5 // Hiển thị 5 mục trên màn hình lớn nhất
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4 // Hiển thị 4 mục trên màn hình desktop
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2 // Hiển thị 2 mục trên màn hình tablet
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1 // Hiển thị 1 mục trên màn hình mobile
            }
        };

        return (
            <div className="movie-section">
                <p className="text-white text-center fs-1 fw-bold mb-5">{title}</p>
                {!showList ? (
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
                ) : (
                    <div className="movie-list">
                        {movies.map((movie, index) => (
                            <div key={index} className="movieCard">
                                <MovieCard movie={movie} />
                            </div>
                        ))}
                    </div>
                )}
                <div className="btn-viewMore">
                    <button className="btn" onClick={this.toggleView}>
                        <span>{showList ? 'ẨN BỚT' : 'XEM THÊM'}</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default MovieSection;