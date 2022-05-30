import {sendMessageActionCreator} from '../../../redux/reducers/messagesReducer'
import MessagesPage from './MessagesPage'
import {connect} from "react-redux"
import { withAuthRedirect } from '../../../hocs/withAuthRedirect'
import { compose } from "redux"

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

const MessagesPageContainer = compose(connect(mapStateToProps, mapDispatchToProps),
withAuthRedirect)(MessagesPage);

export default MessagesPageContainer;