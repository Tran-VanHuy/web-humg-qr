import React from 'react';
import "./style.css"


const Footer = () => {
      return (
            <div className = "wrapper-footer" style = {{backgroundImage : `url("/images/footer.JPG")`}}>
                  <div className = "top-footer">
                        <div className = "item-footer">
                              <div className = "listfooter">
                                    <div className = "item-one">
                                          <div className = "content-one">
                                                <div id = "colorText">BẢN ĐỒ CHỈ DẪN</div>
                                                <div id = "colorText">Trưởng đại học Mỏ địa chất</div>
                                          </div>
                                          <div className = "content-two">
                                                <div id = "colorText">BẢN ĐỒ CHỈ DẪN</div>
                                                <div id = "colorText">Trưởng đại học Mỏ địa chất</div>
                                          </div>
                                    </div>
                                    <div className = "item-two">
                                          <div className = "item-two-top">
                                                <div className = "content-item-one">
                                                      <div id = "colorText">SƠ ĐỒ TRANG</div>
                                                      <div id = "colorText">Xem sơ đồ trang ...</div>
                                                      <div id = "colorText">RSS</div>
                                                </div>
                                                <div className = "content-item-two">
                                                      <div id = "colorText">Các phòng ban</div>
                                                      <div id = "colorText">Các Khoa đào tạo</div>
                                                      <div id = "colorText">Các Công ty - Trung tâm</div>
                                                </div>
                                          </div>
                                          <div className = "item-two-bottom">
                                                <div id = "colorText" className = "content-bottom">Bản quyền thuộc về Trường Đại học Mỏ - Địa chất.</div>
                                                <div id = "colorText" className = "content-bottom">Địa chỉ: Số 18 Phố Viên - Phường Đức Thắng - Q. Bắc Từ Liêm - Hà Nội</div>
                                                <div id = "colorText" className = "content-bottom">Điện thoại: (+84-24) 3838 9633 | Email: hanhchinhtonghop@humg.edu.vn</div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Footer;