import React, { Component } from "react";
import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import spiderman from '../../assets/spiderMan.jpg'
import MovieBox from '../HomePage/Movie/MovieBox'
import discount from '../../assets/discountTicket.jpg'
import Header from "../Header/Header";
import Footer from '../Footer/Footer'
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const responsive2 = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const responsive3 = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <Header />
                    <div className="carousel-container">
                        <Carousel
                            responsive={responsive}
                            swipeable={false}
                            draggable={false}
                            infinite={false}
                            autoPlay={false}
                            keyBoardControl={true}
                            customTransition="transform 0.5s ease-in-out"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            <div className="carousel-item">
                                <img src={spiderman} alt="Movie Banner 1" className="outStandingMovie" />
                                <span className="btn-booking">
                                    <button className="btn btn-primary">Đặt Vé Ngay</button>
                                </span>
                            </div>
                            <div className="carousel-item">
                                <img src={spiderman} alt="Movie Banner 2" className="outStandingMovie" />
                                <span className="btn-booking">
                                    <button className="btn btn-primary">Đặt Vé Ngay</button>
                                </span>
                            </div>
                            <div className="carousel-item">
                                <img src={spiderman} alt="Movie Banner 3" className="outStandingMovie" />
                                <span className="btn-booking">
                                    <button className="btn">Đặt Vé Ngay</button>
                                </span>
                            </div>
                        </Carousel>
                    </div>
                    <div className="filter-session d-flex">
                        <span className="fs-2">ĐẶT VÉ NHANH</span>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>1. Chọn phim</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>2. Chọn ngày</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>3. Chọn suất</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <span className="btn btn-primary">
                            <button className="btn">Đặt Ngay</button>
                        </span>
                    </div>
                    <div className="movie-is-showing mt-5">
                        <p className="text-white text-center fs-1 fw-bold mb-5">Phim đang chiếu</p>
                        <Carousel
                            responsive={responsive2}
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
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="carousel-item">
                                    <div className="movieBox">
                                        <MovieBox />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                        <div class="btn-viewMore">
                            <button className="btn"><span>XEM THÊM</span></button>
                        </div>
                    </div>
                    <div className="upcoming-movie mt-5">
                        <p className="text-white text-center fs-1 fw-bold mb-5">Phim sắp chiếu</p>
                        <Carousel
                            responsive={responsive2}
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
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="carousel-item">
                                    <div className="movieBox">
                                        <MovieBox />
                                        <div className="launch-time text-center">
                                            <p className="text-white-50">Khởi chiếu: 15/11/2024</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                        <div class="btn-viewMore">
                            <button className="btn"><span>XEM THÊM</span></button>
                        </div>
                    </div>
                    <div className="discount mt-5">
                        <p className="text-white text-start fs-1 fw-bold mb-5 mx-3">Khuyến mãi</p>
                        <Carousel
                            responsive={responsive3}
                            swipeable={false}
                            draggable={false}
                            infinite={false}
                            autoPlay={false}
                            showDots={true}
                            keyBoardControl={true}
                            customTransistion="transform 0.5s ease-in-out"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="carousel-item">
                                    <img className="discountBox" src={discount} alt="" />
                                </div>
                            ))}
                        </Carousel>
                        <div class="btn-viewMore">
                            <button className="btn"><span>TẤT CẢ ƯU ĐÃI</span></button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomePage;
