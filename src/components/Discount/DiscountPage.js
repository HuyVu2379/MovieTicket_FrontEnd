import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import image from "../../assets/discountImage.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DiscountPage.css";

function DiscountPage() {
  const offers = [
    {
      title: "C'TEN - HAPPY HOUR - 45K/ 2D MỐC 10H ",
      description:
        "Áp dụng giá 45K/ 2D và 55K/ 3D cho khách hàng xem phim trước 10h sáng và sau 10h tối.",
      conditions: [
        "Khách hàng là thành C’FRIEND hoặc C’VIP của Cinestar.",
        "Áp dụng tại App/Web Cinestar hoặc mua trực tiếp tại rạp.",
      ],
      notes: ["Không áp dụng cho các ngày lễ/tết."],
      imageUrl: image,
      buttonText: "ĐẶT VÉ NGAY",
    },
    {
      title: "C'TEN - HAPPY HOUR - 45K/ 2D MỐC 10H ",
      description:
        "Áp dụng giá 45K/ 2D và 55K/ 3D cho khách hàng xem phim trước 10h sáng và sau 10h tối.",
      conditions: [
        "Khách hàng là thành C’FRIEND hoặc C’VIP của Cinestar.",
        "Áp dụng tại App/Web Cinestar hoặc mua trực tiếp tại rạp.",
      ],
      notes: ["Không áp dụng cho các ngày lễ/tết."],
      imageUrl: image,
      buttonText: "ĐẶT VÉ NGAY",
    },
  ];

  return (
    <Container fluid className="discount-container">
      <Row className="justify-content-center">
        {offers.map((offer, index) => (
          <Col xs={10} className="offer-box" key={index}>
            <Row>
              <Col xs={12} md={6} className="text-column">
                <div className="header-box">
                  <h4 className="offer-title">{offer.title}</h4>
                  <p className="offer-description">{offer.description}</p>
                </div>
                <div className="conditions-box">
                  <h5 className="conditions-title">Điều kiện</h5>
                  <ul className="conditions-list">
                    {offer.conditions.map((condition, index) => (
                      <li key={index} className="conditions-item">
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="conditions-box">
                  <h5 className="conditions-title">Lưu ý</h5>
                  <ul className="conditions-list">
                    {offer.notes.map((note, index) => (
                      <li key={index} className="conditions-item">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="warning" className="offer-button">
                  {offer.buttonText}
                </Button>
              </Col>

              <Col xs={12} md={6} className="image-column">
                <img src={offer.imageUrl} alt="Offer" className="offer-image large-image" />
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DiscountPage;
