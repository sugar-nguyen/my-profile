import React from 'react';

const ProfileLeft = () => {
    return (
        <div className="profile-left">
            <div className="avt">
                <img src="/avt.jpg" alt="" />
            </div>
            <div className="profile-header">
                <div className="name">Nguyễn Linh Đường</div>
                <div className="job">Senior Developer</div>
            </div>
            <div className="profile-info">
                <ul className="vertical-info-list">
                    <li>
                        <i className="fas fa-calendar"></i><span className="text">05/12/1997</span>
                        </li>
                    <li>
                        <i className="fas fa-user-alt"></i><span className="text">Nam</span>
                        </li>
                    <li>
                        <i className="fas fa-mobile-alt"></i><span className="text">0939562461</span>
                        </li>
                    <li>
                        <i className="fas fa-envelope"></i><span className="text">duong.nguyenlinh97@gmail.com</span>
                        </li>
                    <li>
                        <i className="fas fa-home"></i><span className="text">178a, Lê Văn Lương, Phước Kiển, Nhà Bè</span>
                        </li>
                    <li>
                        <i className="fas fa-link"></i><span className="text">fb.com/duong.linh.97</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default ProfileLeft;