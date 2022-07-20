import module from "./UserPhoto.module.css"
import defaultAva from "../../../../../images/defaultAva.jpg"

const UserPhoto = (props) => {
  const setUserPhoto = (e) => {
    if (e.target.files.length) {
    props.setUserPhoto(e.target.files[0])}
  }

  return ( 
    <div className={module.userPhoto}>
      <img src={props.profile.photos.large || defaultAva} className={module.userPhoto}/>
      {props.isOwner && <input type={"file"} onChange={setUserPhoto}/>}
    </div>
  )
}

export default UserPhoto