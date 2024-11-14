import React, { Component } from "react";
import { currentlyShowingMovies } from './Movie'; // Import hàm lấy dữ liệu mẫu
import '../HomePage/styles.css';

class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        this.getDanhSachPhimDangChieu();
    }

    getDanhSachPhimDangChieu = () => {
        const movies = currentlyShowingMovies();
        this.setState({ movies });
    };

    render() {
        const { movies } = this.state;

        return (
            <div className="filter-session d-flex">
                <span className="fs-2">ĐẶT VÉ NHANH</span>
                <select className="form-select" aria-label="Default select example">
                    <option selected>1. Chọn phim</option>
                    {movies.map((movie, index) => (
                        <option key={index} value={movie.id}>{movie.title}</option>
                    ))}
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option selected>2. Chọn ngày</option>
                    {movies.map((movie, index) => (
                        <option key={index} value={movie.id}>{movie.launchDate}</option>
                    ))}
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option selected>3. Chọn suất</option>
                    <option value="1">Sáng</option>
                    <option value="2">Trưa</option>
                    <option value="3">Chiều</option>
                </select>
                <span className="btn btn-primary">
                    <button className="btn">Đặt Ngay</button>
                </span>
            </div>
        );
    }
}

export default FilterBar;