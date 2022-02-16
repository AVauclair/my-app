import module from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {
  return (
    <div className={module.profilePage}>
      <ProfileInfo />
      <MyPosts state={props.state.profilePage}/>
    </div>
  )
}

export default Profile