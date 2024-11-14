import React, { Component } from "react";
import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../HomePage/styles.css';

class Header extends Component {
    render() {
        return (
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
        );
    }
}

export default Header;
