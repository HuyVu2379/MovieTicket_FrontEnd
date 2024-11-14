import React, { Component } from "react";
import spiderMan from '../../../assets/spiderMan.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

class MovieBox extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="movieContainer">
                    <div className="imageContainer">
                        <img className="imageMovie" src={spiderMan} alt="Spider-Man" />
                        <div className="content text-white">
                            <p className="nameMovie fs-3 fw-bold">Ngày xưa có một chuyện tình</p>
                            <div className="d-flex align-items-center gap-2">
                                <i className="fa-solid fa-tags"></i>
                                <p>Thể loại</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <i className="fa-regular fa-clock"></i>
                                <p>Thời lượng</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <i className="fa-solid fa-earth-asia"></i>
                                <p>Quốc gia</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <i className="fa-regular fa-comment-dots"></i>
                                <p>Phụ đề</p>
                            </div>
                        </div>
                    </div>
                    <div className="titleName">
                        Ngày xưa có một chuyện tình
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MovieBox;
