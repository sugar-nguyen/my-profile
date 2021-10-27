import React from 'react';

const ProfileRight = () => {
    return (
        <div className="profile-right">
            <div className="profile-job">
                <p className="title">Tóm tắt</p>
                <div className="summary">
                    <span className="text">Kĩ sư phần mềm với 2,5 năm kinh nghiệm coding các dự án phần mềm, ứng dụng web và website thương mại điện tử sử dụng công nghệ .NET</span>
                </div>
                <p className="title">Học vấn</p>
                <div className="education">
                    <p className="time text">08/2015 - 08/2019</p>
                    <p className="text"><b>ĐẠI HỌC CÔNG NGHỆ SÀI GÒN</b>&nbsp;&nbsp;|&nbsp;&nbsp;Chuyên ngành: công nghệ thông tin</p>
                    <span className="text">Tốt nghiệp loại: Khá</span>
                </div>
                <p className="title">Kinh nghiệm làm việc</p>
                <div className="work-exp">
                    <div className="work">
                        <p className="time text">04/2019 - 12/2020</p>
                        <p className="text"><b>CHAMP SOLUTIONS</b>&nbsp;&nbsp;|&nbsp;&nbsp;Junior Developer</p>
                        <p className="text">
                            - Tham gia dự án quản lý công việc. <br />
                            Công nghệ sử dụng: ASP.NET MVC <br />
                            Trách nhiệm:  <br />
                            + Coding chức năng checkpoint và tạo report. <br />
                            + Hỗ trợ người dùng. <br />
                            - Tham gia dự án quản lý kho vât liệu sản xuất <br />
                            Công nghệ sử dụng: ASP.NET MVC <br />
                            Trách nhiệm: <br />
                            + Phân tích chức năng và coding. <br />
                            + Tạo giao diện người dùng. <br />
                            + Triển khai hệ thống <br />
                            + Hỗ trợ người dùng.
                        </p>
                    </div>
                    <div className="work">
                        <p className="time text">12/2020 - 09/2021</p>
                        <p className="text"><b>YES24 VINA</b>&nbsp;&nbsp;|&nbsp;&nbsp;Developer</p>
                        <p className="text">
                            - Phát triển hệ thống nội bộ Yes24. <br />
                            - Phát triển API Supplier. <br />
                            - Sản xuất event marketing theo tháng. <br />
                            - Phân tích dữ liệu. <br />
                            - Phát triển Web truyện
                        </p>
                    </div>
                    <div className="work">
                        <p className="time text">09/2021 - Hiện tại</p>
                        <p className="text"><b>FPT TELECOM</b>&nbsp;&nbsp;|&nbsp;&nbsp;Developer</p>
                        <p className="text">
                            - Xây dựng api. <br />
                            - Xây dựng UI dashboard. <br />
                        </p>
                    </div>

                </div>
                <p className="title">Thông tin thêm</p>
                <div className="more-info">
                    <p className="text">
                        - Là 1 người vui vẻ hòa đồng, thích giao tiếp vời người hợp gu về mọi thứ. <br />
                        - Là nhân viên văn phòng nhưng chưa bao giờ là kiểu người dành cho văn phòng. <br />
                        - Không thích kiểu cách, gò bó, văn phong, hình thức. <br />
                        - Thích thẳng thắn trong công việc. <br />
                        - Ghét dạ thưa và quá nhiều sự biết ơn. <br />
                    </p>
                </div>

            </div>
        </div>
    );
};


export default ProfileRight;