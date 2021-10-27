import React from 'react';

const Education = (props) => {
    return (
        <div className={props.m.education}>
            <p className={`${props.m.time} ${props.m.text}`}>08/2015 - 08/2019</p>
            <p className={props.m.text}><b>ĐẠI HỌC CÔNG NGHỆ SÀI GÒN</b>&nbsp;&nbsp;|&nbsp;&nbsp;Chuyên ngành: công nghệ thông tin</p>
            <span className={props.m.text}>Tốt nghiệp loại: Khá</span>
        </div>
    );
};


export default Education;