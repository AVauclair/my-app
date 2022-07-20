import module from "./UserContacts.module.css"

const UserContacts = (props) => {
    return <div className={module.userContacts}><b>{props.contactTitle}:</b> {props.contactValue}</div>
}

export default UserContacts