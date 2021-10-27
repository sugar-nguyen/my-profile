import React from 'react';

const MoreInfo = (props) => {
    return (
        <div className={props.m['more-info']}>
            <p className={props.m.text}>
                - Là 1 người vui vẻ hòa đồng, thích giao tiếp vời người hợp gu về mọi thứ. <br />
                {/* - Là nhân viên văn phòng nhưng chưa bao giờ là kiểu người dành cho văn phòng. <br /> */}
                - Không thích kiểu cách, gò bó, văn phong, hình thức. <br />
                - Thích thẳng thắn trong công việc. <br />
                {/* - Ghét dạ thưa và quá nhiều sự biết ơn. <br /> */}
            </p>
        </div>

    );
};



export default MoreInfo;