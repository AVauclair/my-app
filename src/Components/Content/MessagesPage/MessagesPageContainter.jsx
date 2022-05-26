import {sendMessageActionCreator} from '../../../redux/reducers/messagesReducer'
import MessagesPage from './MessagesPage'
import {connect} from "react-redux"

let mapStateToProps = (state) => {
  return {
    state: state
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {dispatch(sendMessageActionCreator(newMessageBody))},
  }
}

const MessagesPageContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesPage);

export default MessagesPageContainer;