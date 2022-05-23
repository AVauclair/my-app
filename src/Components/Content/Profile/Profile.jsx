import module from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <div className={module.profilePage}>
      <ProfileInfo profile={props.profile} userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile