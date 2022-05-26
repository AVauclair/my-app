import React from "react"

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        userStatus: this.props.userStatus,
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateUserStatus(this.state.userStatus)
    }
    onChangeUserStatus = (e) => {
        this.setState({
        userStatus: e.currentTarget.value
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.userStatus !== this.props.userStatus) {
            this.setState({
                userStatus: this.props.userStatus
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                ? <div><input onChange={this.onChangeUserStatus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.userStatus}></input></div>
                : <div><span onClick={this.activateEditMode}>{this.state.userStatus || "----"}</span></div>}
            </div>
        )
    }
}

export default ProfileStatus