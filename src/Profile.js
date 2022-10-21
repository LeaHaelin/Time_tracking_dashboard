import React from 'react';
import photo from "./images/image-jeremy.png"

export const Profile = () => {
    return (
        <div className='profile'>
            <img className='profile__photo' src={photo} alt="" />
            <div className="profile__info">
                <p className="profile__text">Report for</p>
                <h2 className="profile__name">Jeremy Robson</h2>
            </div>
        </div>
    )
}
