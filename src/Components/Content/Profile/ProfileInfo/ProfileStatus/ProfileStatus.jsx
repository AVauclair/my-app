import React, { useState, useEffect } from "react"

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [userStatus, setUserStatus] = useState(props.userStatus)

    useEffect(() => {setUserStatus(props.userStatus)}, [props.userStatus])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(userStatus)
    }
    const onChangeUserStatus = (e) => {
        setUserStatus(e.currentTarget.value)
    }

    return (
        <div>
            {props.isOwner && editMode
                ? <div><input onChange={onChangeUserStatus} autoFocus={true} onBlur={deactivateEditMode} value={userStatus}></input></div>
                : <div><span onClick={activateEditMode}>{props.userStatus || "----"}</span></div>}
        </div>
    )
}

export default ProfileStatus