import module from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={module.message}>
            <div className={module.message}>{props.text}</div>
        </div>
    );
}

export default Message;