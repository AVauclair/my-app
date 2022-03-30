import {updateMessageTextActionCreator, sendMessageActionCreator} from '../../../redux/reducers/messagesReducer'
import MessagesPage from './MessagesPage'

const MessagesPageContainer = (props) => {
    let state = props.storeRedux.getState();

    let sendMessage = (text) => {
        props.storeRedux.dispatch(sendMessageActionCreator(text))
      }
    
    let onChangeMessageText = (text) => {
        props.storeRedux.dispatch(updateMessageTextActionCreator(text));
      }

    return (
        <MessagesPage sendMessage={sendMessage} changeMessageText={onChangeMessageText} 
        areaMessageText={state.messagesPage.areaMessageText} state={state}/>
    )
}

export default MessagesPageContainer;