import React from 'react';

const WorkExp = props => {
    return (
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
    );
};



export default WorkExp;