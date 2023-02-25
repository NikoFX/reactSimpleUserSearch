import React, { useState, useEffect } from 'react'
import Users from './components/users/Users'
import Profile from './components/users/profile/Profile'
//import users from './data'


function App() {

  let [users, setUsers] = useState([])
  let [fetchStatus, setFetchStatus] = useState(false)
  let [searchInput, setSearchInput] = useState('')
  let [profileId, setProfileId] = useState(0)
  let [profileObj] = useState({})

  useEffect(() => {
    fetch('https://randomuser.me/api?results=1000')
      .then(res => res.json())
      .then(data => {
        let i = 0
        setUsers(data.results.map(item => {
          item.id = ++i
          return item
        }))
      })
      .finally(() => {
        setFetchStatus(true)
      })
  }, fetchStatus)


  function handleSearch(e) {
    setProfileId(0)
    setSearchInput(e.target.value.toLowerCase())
  }

  if (searchInput) {
    users = users.filter(item => (item.name.first.toLowerCase().includes(searchInput) | item.name.last.toLowerCase().includes(searchInput)))
  }

  if (profileId) {
    profileObj = users.find(item => item.id === profileId)
  }

  return (
    <div className="row">
      <div className="wrapper">
        <div className="header">
          <h1>User search</h1>
          <input type="text" onInput={handleSearch} placeholder='search' />
        </div>
        {fetchStatus ? <Users users={users} setProfileId={setProfileId} /> : <>Loading...</>}
      </div>
      {profileId ? <Profile profileObj={profileObj} /> : null}
    </div>
  )

}

export default App