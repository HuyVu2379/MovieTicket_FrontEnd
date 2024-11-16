import React, { Component } from "react";
import Header from "../Header/Header";
import MovieSection from "./MovieSection/MovieSection";
import Footer from "../Footer/Footer";
import FilterBar from "./FilterBar/FilterBar";

import linhMieuImage from "../../assets/linh-mieu-official.jpg";
import ngayXuaImage from "../../assets/ngay-xua-co-mot-chuyen-tinh-official.jpg";
import orpheaImage from "../../assets/Orphea_suy_t_nh_14.jpg";
import chuyenCuoiImage from "../../assets/cuoi-xuyen-bien-gioi-official-poster.jpg"

import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import '../HomePage/styles.css';

const responsive = {
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

class Movie extends Component {
  render() {
    const currentlyShowingMovies = [
      { id: 1, title: "Linh Hồn Quỷ Nhập Tràng", rating: "18+", country: "Viet Nam", genre: "Kinh Dị", duration: 180, image: linhMieuImage, launchDate: "15/11/2024" },
      { id: 2, title: "Ngày Xưa Có Một Chuyện Tình", rating: "13+", country: "Viet Nam", genre: "Tình Cảm", duration: 180, image: ngayXuaImage, launchDate: "15/11/2024" },
      { id: 3, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" },
      { id: 4, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" },
      { id: 5, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" },
      { id: 6, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" },
      { id: 7, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" },
      { id: 8, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" }
    ];

    const upcomingMovies = [
      { id: 1, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/12/2024" },
      { id: 2, title: "Đôi Không Là Đứa Nhưng Phải Tỏ Chiến Thắng", rating: "13+", country: "Viet Nam", genre: "Hành Động", duration: 180, image: orpheaImage, launchDate: "25/12/2024" },
      { id: 3, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/12/2024" },
      { id: 4, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/12/2024" },
      { id: 5, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/12/2024" },
      { id: 6, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/12/2024" },
      { id: 7, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/12/2024" },
      { id: 8, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/12/2024" }
    ];



    return (
      <div className="container-fluid">
        <div className="container">
          <Header />
          <FilterBar />
          <MovieSection title="Phim đang chiếu" movies={currentlyShowingMovies} responsive={responsive} />
          <MovieSection title="Phim sắp chiếu" movies={upcomingMovies} responsive={responsive} />
        </div>
        <Footer />
      </div>
    );
  }
}
export const currentlyShowingMovies = () => {
  return [
    { id: 1, title: "Linh Hồn Quỷ Nhập Tràng", rating: "18+", country: "Viet Nam", genre: "Kinh Dị", duration: 180, image: linhMieuImage, launchDate: "15/11/2024" },
    { id: 2, title: "Ngày Xưa Có Một Chuyện Tình", rating: "13+", country: "Viet Nam", genre: "Tình Cảm", duration: 180, image: ngayXuaImage, launchDate: "15/11/2024" },
    { id: 3, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" },
    { id: 4, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" },
    { id: 5, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" },
    { id: 6, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" },
    { id: 7, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" },
    { id: 8, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", country: "Viet Nam", genre: "Phiêu Lưu", duration: 180, image: chuyenCuoiImage, launchDate: "15/11/2024" }
  ];
}
export default Movie;
