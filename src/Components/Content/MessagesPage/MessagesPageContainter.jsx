import {updateMessageTextActionCreator, sendMessageActionCreator} from '../../../redux/reducers/messagesReducer'
import MessagesPage from './MessagesPage'
import {connect} from "react-redux"

let mapStateToProps = (state) => {
  return {
    areaMessageText: state.messagesPage.areaMessageText,
    state: state
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (text) => {dispatch(sendMessageActionCreator(text))},
    onChangeMessageText: (text) => {dispatch(updateMessageTextActionCreator(text))}
  }
}

const MessagesPageContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesPage);

export default MessagesPageContainer;