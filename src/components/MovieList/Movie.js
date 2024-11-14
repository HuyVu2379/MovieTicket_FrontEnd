import React, { Component } from "react";
import Header from "./Header";
import MovieSection from "./MovieSection";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import './Movie.css'
import linhMieuImage from "../../assets/movie/linh-mieu-official.png";
import ngayXuaImage from "../../assets/movie/ngay-xua-co-mot-chuyen-tinh-official.png";
import orpheaImage from "../../assets/movie/Orphea_suy_t_nh_14.png";
import chuyenCuoiImage  from "../../assets/movie/cuoi-xuyen-bien-gioi-official-poster.jpg"

const currentlyShowingMovies = [
  { id: 1, title: "Linh Hồn Quỷ Nhập Tràng", rating: "18+", genre: "Kinh Dị" ,post:  linhMieuImage},
  { id: 2, title: "Ngày Xưa Có Một Chuyện Tình", rating: "13+", genre: "Tình Cảm" ,post:  ngayXuaImage},
];

const upcomingMovies = [
  { id: 1, title: "Cuộc Phiêu Lưu Thú Vị", rating: "16+", genre: "Phiêu Lưu" ,post: chuyenCuoiImage},
  { id: 2, title: "Đôi Không Là Đứa Nhưng Phải Tỏ Chiến Thắng", rating: "13+", genre: "Hành Động",post:  orpheaImage },
];

class Movie extends Component {
    render(){
        return (
            <div className="Movie">
              <Header />
              <MovieSection title="Phim Đang Chiếu" movies={currentlyShowingMovies} />
              <MovieSection title="Phim Sắp Chiếu" movies={upcomingMovies} />
              <Footer />
            </div>
        );
    }
}
  

export default Movie;
