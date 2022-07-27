import Preloader from '../../../../common/Preloader/Preloader'
import module from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import ProfileData from "./ProfileData/ProfileData"
import ProfileDataEditPage from './ProfileData/ProfileDataEdit/ProfileDataEditPage'
import UserPhoto from './UserPhoto/UserPhoto'
import {useState} from 'react'

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false)

  const activateEditMode = () => {
      setEditMode(true)
  }

  const deactivateEditMode = () => {
      setEditMode(false)
  }

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={module.profileInfoPage}>
      Main content
      <div className={module.picture}>
        {/* <img
          src="http://img2.reactor.cc/pics/post/full/Anime-фэндомы-Чмоня-котёнок-7166976.jpeg"
          alt="not found"
        /> */}
      </div>
      <div className={module.descriptionBlock}>
        <UserPhoto profile={props.profile} setUserPhoto={props.setUserPhoto} isOwner={props.isOwner}/>
        {editMode 
        ? <ProfileDataEditPage profile={props.profile} exitEditMode={() => {deactivateEditMode()}} setUserProfileData={props.setUserProfileData} setEditMode={setEditMode} isOwner={props.isOwner}/> 
        : <ProfileData profile={props.profile} toEditMode={() => {activateEditMode()}} isOwner={props.isOwner} />}
        <ProfileStatus userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} isOwner={props.isOwner}/>
      </div>
    </div>
  )
}

export default ProfileInfo
