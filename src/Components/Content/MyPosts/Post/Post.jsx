import module from './Post.module.css';

const Post = (props) => {
    return (
        <div className = {module.item}>
            <img src = "https://pbs.twimg.com/media/EvAXjhzXUAMWOnf.jpg"/>
            {props.text}
            <br/>
            <span>{props.likes} likes</span>
            <button>DAMN I LIKE THIS</button>
        </div>
    );
}

export default Post;