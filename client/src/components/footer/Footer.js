import React from 'react';
import './Footer.css'


function Footer(props) {
    return (
        <section id="footer">
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-name">
                        <h2>BN-Store</h2>
                    </div>
                    <div className="footer-top-about">
                    <h2>Liên hệ</h2>
                        <ul>
                            <li>
                                <a>Địa chỉ: 47/6 Vườn Lài, An Phú Đông, Quận 12, Thành phố Hồ Chí Minh, Việt Nam</a>
                            </li>
                            <li>
                                <a>Hotline 24/7: 0947911385</a>
                            </li>
                            <li>
                                <a>contact@nbstore.vn</a>
                            </li>
                            <li>
                                <a>CThứ 2 - 7 : 7:30 - 17:30
                                Chủ nhật: nghỉ</a>
                            </li>
                            <li>
                                <a><img src="https://theme.hstatic.net/1000075078/1000610097/14/gov.png?v=664"></img></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-top-sp">
                        <h2>Chính sách</h2>
                        <p>ĐIỀU KHOẢN SỬ DỤNG</p>
                        <p>QUY CHẾ HOẠT ĐỘNG</p>
                        <p>CHÍNH SÁCH BẢO MẬT</p>
                        <p>CHÍNH SÁCH THANH TOÁN</p>
                    </div>
                    <div className="footer-top-delivery">
                        <h2>CHẤP NHẬN THANH TOÁN</h2>
                        <ul>
                            <li>
                                <a><img src="https://bizweb.dktcdn.net/100/356/911/themes/722316/assets/payment.png?1721637026514"></img></a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="footer-bot">
                    
                    <p>Copyright © 2023 BN-Store. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;