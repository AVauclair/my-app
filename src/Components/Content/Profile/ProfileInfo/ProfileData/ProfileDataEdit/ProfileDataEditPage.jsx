import { ReduxProfileDataEditForm } from "./ProfileDataEdit"

const ProfileDataEditPage = (props) => {

  const onSubmit = (formData) => {
    props.setUserProfileData(formData)
  }
  
  return (
    <div>
        <ReduxProfileDataEditForm onSubmit={onSubmit} profile={props.profile}/>
    </div>
  )
}

export default ProfileDataEditPage