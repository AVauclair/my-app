import { ReduxProfileDataEditForm } from "./ProfileDataEdit"

const ProfileDataEditPage = (props) => {

  const onSubmit = (formData) => {
    props.setUserProfileData(formData).then(() => {
      props.setEditMode(false)
    })
  }
  
  return (
    <div>
        <ReduxProfileDataEditForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/>
    </div>
  )
}

export default ProfileDataEditPage