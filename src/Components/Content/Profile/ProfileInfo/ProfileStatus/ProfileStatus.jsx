import React from "react"

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    render() {
        debugger;
        return (
            <div>
                {this.state.editMode
                ? <div><input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input></div>
                : <div><span onClick={this.activateEditMode}>{this.props.status}</span></div>}
            </div>
        )
    }
}

export default ProfileStatus