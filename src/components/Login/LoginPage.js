import React, { useState } from "react";
import { Form, Button, Tabs, Tab, Container, Row, Col, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./LoginPage.css"

function LoginPage() {
  const [key, setKey] = useState("login");
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
    fullName: "",
    dob: "",
    phone: "",
    userID: "",
    email: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot Password submitted:", formData.email);
    setShowForgotPasswordModal(false); 
  };

  return (
    <Container fluid className="auth-container py-4">
      <Row className="justify-content-center">
        <Col className="auth-form-box">
          <Tabs
            justify
            variant="pills"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="auth-tabs"
          >
            <Tab eventKey="login" title="ĐĂNG NHẬP" className="auth-tab">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Tài khoản, Email hoặc số điện thoại *</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="auth-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Mật khẩu *</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="auth-input"
                  />
                </Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Lưu mật khẩu đăng nhập"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="mb-3"
                />

                <div className="auth-forgot-password-container">
                  <Button
                    variant="link"
                    onClick={() => setShowForgotPasswordModal(true)}
                    className="auth-link-button"
                  >
                    Quên mật khẩu?
                  </Button>
                </div>

                <div className="auth-login-button-container">
                  <Button
                    variant="warning"
                    type="submit"
                    className="auth-submit-button"
                  >
                    ĐĂNG NHẬP
                  </Button>
                </div>
              </Form>
            </Tab>

            <Tab eventKey="register" title="ĐĂNG KÝ" className="auth-tab">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFullName">
                  <Form.Label>Họ và tên *</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="auth-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDob">
                  <Form.Label>Ngày sinh *</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="auth-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Số điện thoại *</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="auth-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUsernameReg">
                  <Form.Label>Tên đăng nhập *</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="auth-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUserID">
                  <Form.Label>CCCD/CMND *</Form.Label>
                  <Form.Control
                    type="text"
                    name="userID"
                    value={formData.userID}
                    onChange={handleChange}
                    required
                    className="auth-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="auth-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPasswordReg">
                  <Form.Label>Mật khẩu *</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="auth-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Xác thực mật khẩu *</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="auth-input"
                  />
                </Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Khách hàng đã đồng ý các điều khoản, điều kiện của thành viên Cinestar"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mb-3"
                  required
                />
                <Button
                  variant="warning"
                  type="submit"
                  className="auth-submit-button"
                >
                  ĐĂNG KÝ
                </Button>
                <p className="auth-switch-text">
                  Bạn đã có tài khoản?{" "}
                  <span
                    onClick={() => setKey("login")}
                    className="auth-link-button"
                  >
                    Đăng nhập
                  </span>
                </p>
              </Form>
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Modal
        show={showForgotPasswordModal}
        onHide={() => setShowForgotPasswordModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Quên Mật Khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleForgotPasswordSubmit}>
            <Form.Group className="mb-3" controlId="formEmailForgot">
              <Form.Label>Nhập Email để đặt lại mật khẩu *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button
              variant="warning"
              type="submit"
              className="auth-submit-button w-100"
            >
              Gửi Yêu Cầu
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
    
  );
}

export default LoginPage;
