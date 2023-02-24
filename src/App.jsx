import React, { useState } from 'react'
import Users from './components/users/Users'
import Profile from './components/users/profile/Profile'
//import users from './data'


function App({ users }) {

  let [searchInput, setSearchInput] = useState('')
  function handleSearch(e) {
    setProfileId(0)
    setSearchInput(e.target.value.toLowerCase())
  }
 
  if (searchInput) {
    users = users.filter(item => (item.name.first.toLowerCase().includes(searchInput) | item.name.last.toLowerCase().includes(searchInput)))
  }


  let [profileId, setProfileId] = useState(0)
  let [profileObj] = useState({})
  if (profileId) {
    profileObj = users.find(item => item.id == profileId)
  }

  return (
    <div className="row">
      <nav></nav>
      <div className="wrapper">
        <div className="header">
          <h1>User search</h1>
          <input type="text" onInput={handleSearch} placeholder='search' />
        </div>
        <Users users={users} setProfileId={setProfileId} />
      </div>
      {profileId ? <Profile profileObj={profileObj} /> : null}
    </div>
  )

}

export default App