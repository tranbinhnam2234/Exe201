import React from "react";
import "./ContactForm.css";

const ContactForm = () => (
  <div className="contact-form-section">
    <div className="contact-form-left">
      <h2>BẠN ĐÃ SẴN SÀNG ĐỂ <br /><span>THAY ĐỔI?</span></h2>
      <p>Hãy để lại thông tin của bạn và chúng tôi sẽ liên hệ với bạn sớm nhất có thể</p>
    </div>
    <form className="contact-form-right">
      <div className="form-row">
        <input type="text" placeholder="Họ và tên" />
        <input type="text" placeholder="Số điện thoại" />
      </div>
      <div className="form-row">
        <input type="text" placeholder="Nơi ở hiện tại" />
        <input type="text" placeholder="Mục tiêu luyện tập" />
      </div>
      <textarea placeholder="Vấn đề bạn đang gặp phải"></textarea>
      <button type="submit">GỬI THÔNG TIN</button>
    </form>
  </div>
);

export default ContactForm; 