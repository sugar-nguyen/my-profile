import React from 'react';

 const ProfileLeft = (props) => {
    return (
        <div className={props.m['profile-left']}>
            <div className={props.m.avt}>
                <img src="/avt.jpg" alt="avt" />
            </div>
            <div className={props.m['profile-header']}>
                <div className={props.m.name}>Nguyễn Linh Đường</div>
                <div className={props.m.job}>Senior Developer</div>
            </div>
            <div className={props.m['profile-info']}>
                <ul className={props.m['vertical-info-list']}>
                    <li>
                        <i className="fas fa-calendar"></i><span className={props.m.text}>05/12/1997</span>
                        </li>
                    <li>
                        <i className="fas fa-user-alt"></i><span className={props.m.text}>Nam</span>
                        </li>
                    <li>
                        <i className="fas fa-mobile-alt"></i><span className={props.m.text}>0939562461</span>
                        </li>
                    <li>
                        <i className="fas fa-envelope"></i><span className={props.m.text}>duong.nguyenlinh97@gmail.com</span>
                        </li>
                    <li>
                        <i className="fas fa-home"></i><span className={props.m.text}>178a, Lê Văn Lương, Phước Kiển, Nhà Bè</span>
                        </li>
                    <li>
                        <i className="fas fa-link"></i><span className={props.m.text}>fb.com/duong.linh.97</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default ProfileLeft;