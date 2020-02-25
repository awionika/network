import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://standfirst-worktechacademy-production.imgix.net/uploads/2019/07/AdobeStock_194936672.jpeg?auto=compress,format&crop=faces,entropy,edges&fit=crop&w=1200&h=500' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;