import React from 'react';
import Summary from './Summary';
import Education from './Education';
import WorkExp from './WorkExp';
import MoreInfo from './MoreInfo';

const ProfileRight = (props) => {
    return (
        <div className={props.m['profile-right']}>
            <div className={props.m['profile-job']}>
                <p className={props.m.title}>Tóm tắt</p>
                <Summary m={props.m} />
                <p className={props.m.title}>Học vấn</p>
                <Education m={props.m} />
                <p className={props.m.title}>Kinh nghiệm làm việc</p>
                <WorkExp m={props.m} />
                <p className={props.m.title}>Thông tin thêm</p>
                <MoreInfo m={props.m} />
            </div>
        </div>
    );
};


export default ProfileRight;