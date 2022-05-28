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
    //СТАТУСЫ У ТЕБЯ РАБОТАЮТ, ПРОСТО КОМПОНЕНТА РЕНДЕРИТСЯ БЫСТРЕЕ, ЧЕМ ПРИХОДИТ ЮЗЕРСТАТУС, ПОЭТОМУ ОНО ОТОБРАЖАЕТ, ЯКОБЫ ЕГО НЕТ.//
    //КСТАТИ У ТЕБЯ ЕЩЁ ИЗ-ЗА РЕДИРЕКТА В ПРОФИЛЕ ПРИ ПОПЫТКЕ ПЕРЕЙТИ НА ЧЕЙ-ТО ПРОФИЛЬ ЧЕРЕЗ УРЛ, ОТПРАВИТ ПОЛЬЗОВАТЕЛЯ В СВОЙ ПРОФИЛЬ => 
    //(РЕДИРЕКТИТ НА ЛОГИН ЕСЛИ ISAUTH = FALSE, А ОН ВСЕГДА БУДЕТ FALSE, ПОТОМУ ЧТО ПРИХОДИТ ПОЗЖЕ, А ПОСЛЕ ТОГО, КАК ПРИДЕТ, ЛОГИН РЕДИРЕКТНЕТ НА ТВОЙ ПРОФИЛЬ) 
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