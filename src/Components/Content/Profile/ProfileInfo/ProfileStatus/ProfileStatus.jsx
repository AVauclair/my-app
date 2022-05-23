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

    render() {
        debugger;
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