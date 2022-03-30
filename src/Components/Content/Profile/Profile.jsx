import module from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {
  debugger;
  return (
    <div className={module.profilePage}>
      <ProfileInfo />
      <MyPosts storeRedux={props.storeRedux}/>
    </div>
  )
}

export default Profile