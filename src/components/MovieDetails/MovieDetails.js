import React, { Component } from "react";
import Header from '../Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';
import moviePoster from '../../assets/spiderMan.jpg';
import seatScreen from '../../assets/img-screen.png'
import Footer from '../Footer/Footer'
class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    toggleExpanded = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    };

    render() {
        const { expanded } = this.state;
        function generateSeats(rows, totalSeats, vipRows, vipStart, vipEnd) {
            const result = [];

            rows.forEach((row) => {
                const seats = [];
                for (let i = 1; i <= totalSeats; i++) {
                    seats.push({
                        id: `${row}${i}`,
                        type:
                            vipRows.includes(row) && i >= vipStart && i <= vipEnd ? 'vip' : 'normal',
                    });
                }
                result.push({ row, seats });
            });

            return result;
        }

        // Tạo 9 hàng từ A đến I, mỗi hàng 17 ghế
        const rows = 'ABCDEFGHI'.split('');
        const totalSeats = 17;
        const vipRows = ['C', 'D', 'E', 'F', 'G']; // Hàng VIP
        const vipStart = 4;
        const vipEnd = 14;

        const seatData = generateSeats(rows, totalSeats, vipRows, vipStart, vipEnd);

        return (
            <div className="container-fluid">
                <div className="container">
                    <Header />
                    <div className="content-movie">
                        <div className="movie-image-box">
                            <img className="movie-image" src={moviePoster} alt="Movie Poster" />
                        </div>
                        <div className="movie-information">
                            <h1 className="name-movie">LINH MIÊU: QUỶ NHẬP TRÀNG (T18)</h1>
                            <ul className="movie-details-list">
                                <li>
                                    <i className="fa-solid fa-tag"></i>
                                    <span>Kinh Dị</span>
                                </li>
                                <li>
                                    <i className="fa-regular fa-clock"></i>
                                    <span>110'</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-earth-asia"></i>
                                    <span>Việt Nam</span>
                                </li>
                                <li>
                                    <i className="fa-regular fa-comment-dots"></i>
                                    <span>VN</span>
                                </li>
                                <li className="rating">
                                    <i className="fa-solid fa-user-check"></i>
                                    <span>T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)</span>
                                </li>
                            </ul>
                            <div className="description">
                                <h3>MÔ TẢ</h3>
                                <p>Đạo diễn: Lưu Thành Luân</p>
                                <p>Diễn viên: Hồng Đào, Nguyễn Thúc Thùy Tiên, Thiên An,...</p>
                                <p>Khởi chiếu: Thứ Bảy, 09/11/2024</p>
                            </div>
                            <div className="movie-content">
                                <h3>NỘI DUNG PHIM</h3>
                                <p className={`text-content ${expanded ? 'expanded' : ''}`}>
                                    Linh Miêu: Quỷ Nhập Tràng lấy cảm hứng từ truyền thuyết dân gian về “quỷ nhập tràng” để xây dựng cốt truyện. Phim lồng ghép những nét văn hóa đặc trưng của Huế như nghệ thuật khảm sành - một văn hóa đặc sắc của thời nhà Nguyễn, đề cập đến các vấn đề về giai cấp và quan điểm trọng nam khinh nữ. Đặc biệt, hình ảnh rước kiệu thây ma và những hình nhân giấy không chỉ biểu trưng cho tai ương hay điềm dữ mà còn là hiện thân của nghiệp quả.
                                </p>
                                <button onClick={this.toggleExpanded} className="toggle-button">
                                    {expanded ? "Thu gọn" : "Xem thêm"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="date-show-section">
                        <h2>LỊCH CHIẾU</h2>
                        <div className="d-flex gap-4 mt-4">
                            {[...Array(5)].map((_, index) => (
                                <div className="date-show">
                                    <span className="fw-bold">19/11</span>
                                    <span>Thứ ba</span>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    <div className="show-list text-white mt-5">
                        <h2 className="mb-4">DANH SÁCH SUẤT CHIẾU</h2>
                        <div className="show-list-box">
                            <h3>CineStar Hồ Chí Minh</h3>
                            <p>13 Nguyễn Văn Bảo, phường 4, Gò Vấp, thành phố Hồ Chí Minh</p>
                            <div className="show-time-list mt-4">
                                {[...Array(15)].map((_, index) => (
                                    <div className="show-time-box">
                                        <span>20:00</span>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="show-list text-white mt-5">
                        <h2 className="mb-4">CHỌN GHẾ</h2>
                        <div className="seat-box">
                            <div className="seat-screen">
                                <img className="image-screen" src={seatScreen} alt="" />
                                <p>Màn hình</p>
                            </div>
                            <table className="seat-table">
                                <tbody>
                                    {seatData.map((row) => (
                                        <tr key={row.row}>
                                            <td>{row.row}</td>
                                            {row.seats.map((seat) => (
                                                <td className="seat-td" key={seat.id}>
                                                    <div className={`seat ${seat.type === 'vip' ? 'vip-seat' : 'normal-seat'}`}>
                                                        {seat.id}
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="note">
                                <div className="note-item">
                                    <div className='note-normal'></div>
                                    <strong>GHẾ THƯỜNG</strong>
                                </div>
                                <div className="note-item">
                                    <div className="note-vip"></div>
                                    <strong>GHẾ VIP</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="confirm-ticket-booking w-100 text-white">
                    <div>
                        <h3>Cười xuyên biên giới</h3>
                        <p>Cine Quốc Thanh| 1 người lớn</p>
                        <p>Phòng chiếu : 06 | D08 | 21:40</p>
                    </div>
                    <div>
                        <div className="d-flex gap-4">
                            <p>Tạm tính:</p>
                            <strong>75,000 VNĐ</strong>
                        </div>
                        <div class="btn-booking-footer">
                            <button className="btn"><span>ĐẶT VÉ</span></button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MovieDetails;
