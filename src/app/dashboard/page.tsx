"use client"

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Your dashboard info here</p>
      <Profile />
    </div>
  )
}

const Profile = () => { 
  return (
    <div>
      <h1>Profile (admin)</h1>
      <p>Your profile info here</p>
    </div>
  )
}
