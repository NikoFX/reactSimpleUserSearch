import React from 'react'

function Users({ users, setProfileId }) {

    function userClick(e,id) {
        e.preventDefault()
        setProfileId(id)
    }

    return (
        <>
            <div className="users">
                {users.map((item) =>
                    <div className="card" onClick={(e)=>{userClick(e,item.id)}} key={item.id}>
                        <img src={item.picture.medium} alt="img" className="avatar" />
                        <div className="typography">
                            <h3 className="fullname">{item.name.first} {item.name.last}</h3>
                            <p className="location">{item.location.city}, {item.location.country}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Users