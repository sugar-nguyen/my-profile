import React from 'react';

const ProfileRight = (props) => {
    return (
        <div className={props.m['profile-right']}>
            <div className={props.m['profile-job']}>
                <p className={props.m.title}>Tóm tắt</p>
                <div className={props.m.summary}>
                    <span className={props.m.text}>Kĩ sư phần mềm với 2,5 năm kinh nghiệm coding các dự án phần mềm, ứng dụng web và website thương mại điện tử sử dụng công nghệ .NET</span>
                </div>
                <p className={props.m.title}>Học vấn</p>
                <div className={props.m.education}>
                    <p className={`${props.m.time} ${props.m.text}`}>08/2015 - 08/2019</p>
                    <p className={props.m.text}><b>ĐẠI HỌC CÔNG NGHỆ SÀI GÒN</b>&nbsp;&nbsp;|&nbsp;&nbsp;Chuyên ngành: công nghệ thông tin</p>
                    <span className={props.m.text}>Tốt nghiệp loại: Khá</span>
                </div>
                <p className={props.m.title}>Kinh nghiệm làm việc</p>
                <div className={props.m['work-exp']}>
                    <div className={props.m.work}>
                        <p className={`${props.m.time} ${props.m.text}`}>04/2019 - 12/2020</p>
                        <p className={props.m.text}><b>CHAMP SOLUTIONS</b>&nbsp;&nbsp;|&nbsp;&nbsp;Junior Developer</p>
                        <p className={props.m.text}>
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
                    <div className={props.m.work}>
                        <p className={`${props.m.time} ${props.m.text}`}>12/2020 - 09/2021</p>
                        <p className={props.m.text}><b>YES24 VINA</b>&nbsp;&nbsp;|&nbsp;&nbsp;Developer</p>
                        <p className={props.m.text}>
                            - Phát triển hệ thống nội bộ Yes24. <br />
                            - Phát triển API Supplier. <br />
                            - Sản xuất event marketing theo tháng. <br />
                            - Phân tích dữ liệu. <br />
                            - Phát triển Web truyện
                        </p>
                    </div>
                    <div className={props.m.work}>
                        <p className={`${props.m.time} ${props.m.text}`}>09/2021 - Hiện tại</p>
                        <p className={props.m.text}><b>FPT TELECOM</b>&nbsp;&nbsp;|&nbsp;&nbsp;Developer</p>
                        <p className={props.m.text}>
                            - Xây dựng api. <br />
                            - Xây dựng UI dashboard. <br />
                        </p>
                    </div>

                </div>
                <p className={props.m.title}>Thông tin thêm</p>
                <div className={props.m['more-info']}>
                    <p className={props.m.text}>
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