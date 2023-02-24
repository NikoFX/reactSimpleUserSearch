import React from 'react'

function Profile({ profileObj }) {
    
    return (
        <div className='profile'>
            <img src={profileObj.picture.large} alt="img_large" />
            <h1>{profileObj.name.first} {profileObj.name.last}</h1>
            <ul>
                <li>{profileObj.gender}</li>
                <li>{profileObj.email}</li>
                <li>{profileObj.location.city}, {profileObj.location.country}</li>
            </ul>
        </div>
    )
}

export default Profile