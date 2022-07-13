import Preloader from '../../../../common/Preloader/Preloader'
import module from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import defaultAva from "../../../../images/defaultAva.jpg"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  const setUserPhoto = (e) => {
    if (e.target.files.length) {
      props.setUserPhoto(e.target.files[0])}
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
        <img src={props.profile.photos.large || defaultAva} className={module.userPhoto}/>
        {props.isOwner && <input type={"file"} onChange={setUserPhoto}/>}
        <br/>
        About me: {props.profile.aboutMe}
        <br/>
        <ProfileStatus userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} isOwner={props.isOwner}/>
      </div>
    </div>
  )
}

export default ProfileInfo
