import React, { Component } from "react";
<<<<<<< HEAD
import logo from "../../assets/image.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './styles.css'
class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: "120px", height: "120px" }}
                        />

                        <div className="d-flex align-items-center gap-3">
                            <button
                                className="btn btn-warning"
                                style={{ fontWeight: "bold" }}
                            >
                                <i className="fas fa-ticket-alt"></i> ĐẶT VÉ NGAY
                            </button>
                            <button
                                className="btn btn-primary"
                                style={{ fontWeight: "bold" }}
                            >
                                <i className="fas fa-popcorn"></i> ĐẶT BẮP NƯỚC
                            </button>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <div className="input-group" style={{ maxWidth: "300px" }}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tìm phim, rạp"
                                    aria-label="Search"
                                    style={{ borderRadius: "20px", padding: "10px 15px" }}
                                />
                                <span style={styles.searchIcon} className="input-group-text bg-transparent border-0">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>

                            <a href="#" className="text-white d-flex align-items-center">
                                <i className="fas fa-user-circle me-1"></i> Đăng nhập
                            </a>

                            <div className="d-flex align-items-center">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                                    alt="Vietnam Flag"
                                    style={{ width: "20px", height: "auto" }}
                                    className="me-1"
                                />
                                <span className="text-white">VN</span>
                                <i className="fas fa-chevron-down text-white ms-1"></i>
                            </div>
                        </div>
                    </div>
                </nav>
=======
import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import './styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import spiderman from '../../assets/spiderMan.jpg'
import MovieBox from '../HomePage/Movie/MovieBox'
import discount from '../../assets/discountTicket.jpg'
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
                    <nav className="navbar navbar-expand-lg">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <div className="d-flex gap-5">
                                <img
                                    className="logo"
                                    src={logo}
                                    alt="Logo"
                                />

                                <div className="d-flex align-items-center gap-3">
                                    <button
                                        className="btn btn-warning"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        <i className="fas fa-ticket-alt"></i> ĐẶT VÉ NGAY
                                    </button>
                                </div>
                                <a className="text-decoration-none text-white d-flex align-items-center" href="#">Khuyến mãi</a>
                                <a className="text-decoration-none text-white d-flex align-items-center" href="#">Giới thiệu</a>
                            </div>

                            <div className="d-flex align-items-center gap-4">
                                <div className="inputGroup d-flex position-relative">
                                    <input
                                        type="text"
                                        className="searchInput form-control"
                                        placeholder="Tìm phim, rạp"
                                        aria-label="Search"
                                    />
                                    <span className="searchIcon position-absolute">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </div>

                                <div className="d-flex gap-2">
                                    <i className="iconUser fas fa-user-circle me-1"></i>
                                    <a href="#" className="text-white d-flex align-items-center text-decoration-none">
                                        Đăng nhập
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>

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
                                    <img className="discountBox" src={discount} alt="" />
                                </div>
                            ))}
                        </Carousel>
                        <div class="btn-viewMore">
                            <button className="btn"><span>TẤT CẢ ƯU ĐÃI</span></button>
                        </div>
                    </div>
                </div>
                <div className="w-100 footer d-flex justify-content-around">
                    <div className="footer-item">
                        <img className="logo" src={logo} alt="" />
                        <p>BE HAPPY, BE A STAR</p>
                        <div class="btn-booking-footer">
                            <button className="btn"><span>ĐẶT VÉ</span></button>
                        </div>
                    </div>
                    <div className="footer-item">
                        <ul>
                            <li className="titleCategory">Tài khoản</li>
                            <li><a href="#">Đăng nhập</a></li>
                            <li><a href="#">Đăng ký</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <ul>
                            <li className="titleCategory">Xem phim</li>
                            <li><a href="#">Phim đang chiếu</a></li>
                            <li><a href="#">Phim sắp chiếu</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <ul>
                            <li className="titleCategory">CINESTAR</li>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Liên hệ</a></li>
                        </ul>
                    </div>
                </div>
>>>>>>> origin/main
            </div>
        );
    }
}

export default HomePage;
