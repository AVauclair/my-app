import module from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <div className={module.profilePage}>
      <ProfileInfo profile={props.profile} isOwner={props.isOwner} userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} setUserPhoto={props.setUserPhoto}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile