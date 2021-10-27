import React from 'react';

const Avt = (props) => {
    return (
        <>
            <div className={props.m.avt}>
                <img src="/avt.jpg" alt="avt" />
            </div>
            <div className={props.m['profile-header']}>
                <div className={props.m.name}>Nguyễn Linh Đường</div>
                <div className={props.m.job}>.Net Developer</div>
            </div>
        </>
    );
};



export default Avt;