import module from "./ProfileData.module.css"
import UserContacts from './UserContacts/UserContacts'

const ProfileData = (props) => {
    return (
        <div className={module.profileData}>
        <div><b>Full name:</b> {props.profile.fullName || "nothing"}</div>
        <div><b>About me:</b> {props.profile.aboutMe || "nothing"}</div>
        <div><b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}</div>
        {props.profile.lookingForAJob && <div><b>Looking for a job description:</b> {props.profile.lookingForAJobDescription || "nothing"}</div>}
        <div>
            <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => { 
                return (
                    props.profile.contacts[key] &&
                    <UserContacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>)})}
        </div>
        
        {props.isOwner && <div><button onClick={props.toEditMode}>Редактировать</button></div>}
        </div>
    )
}

export default ProfileData