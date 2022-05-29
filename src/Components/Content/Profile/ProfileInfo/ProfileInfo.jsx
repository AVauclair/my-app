import Preloader from '../../../../common/Preloader/Preloader'
import module from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus/ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={module.profileInfoPage}>
      Main content
      <div className={module.picture}>
        <img
          src="http://img2.reactor.cc/pics/post/full/Anime-фэндомы-Чмоня-котёнок-7166976.jpeg"
          alt="not found"
        />
      </div>
      <div className={module.descriptionBlock}>
        {/* <img src={props.profile.photos.large}/>
        {props.profile.aboutMe} */}
        <ProfileStatus userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo
