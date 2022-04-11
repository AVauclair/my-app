import module from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <div className={module.profilePage}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile