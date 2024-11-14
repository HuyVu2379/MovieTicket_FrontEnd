import React from "react";
import './Movie.css'
import logo from '../../assets/movie/header-logo.jpg';
function Header() {
  return (
    <header className="header">
      <img src= {logo} alt="Logo" />
      <nav>
        <button>Đặt Vé Nhanh</button>
        <button>Lịch Chiếu</button>
        <button>Khuyến Mãi</button>
      </nav>
      <div className="user-options">
        <button>Đăng Nhập</button>
      </div>
    </header>
  );
}

export default Header;
