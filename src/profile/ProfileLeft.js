import React from 'react';
import Avt from './Avt';
import Info from './Info';
import Skill from './Skill';

const ProfileLeft = (props) => {
    return (
        <div className={props.m['profile-left']}>
            <Avt m={props.m} />
            <Info m={props.m} />
            <p className={props.m.title}>kỹ năng</p>
            <Skill m={props.m}/>
        </div>
    );
};


export default ProfileLeft;