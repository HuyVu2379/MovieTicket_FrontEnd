import React, { Component } from "react";
import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import './styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import spiderman from '../../assets/spiderMan.jpg'
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

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid d-flex justify-content-between align-items-center">
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
                    <div className="movie-is-showing">
                        <p className="text-white text-center fs-1 fw-bold">Phim đang chiếu</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
