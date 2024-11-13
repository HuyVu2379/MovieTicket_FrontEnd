import React, { Component } from "react";
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
            </div>
        );
    }
}

export default HomePage;
