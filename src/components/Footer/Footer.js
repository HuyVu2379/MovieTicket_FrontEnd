import React, { Component } from "react";
import logo from '../../assets/logo.png'
import './styles.css'
class Footer extends Component {
    render() {
        return (
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
        )
    }
}
export default Footer;