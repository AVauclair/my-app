import module from './Content.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';


const Content = (props) => {
    return (
        <div className = {module.main_content}>
            Main content

            <div className = {module.picture}>
                <img src = "http://img2.reactor.cc/pics/post/full/Anime-фэндомы-Чмоня-котёнок-7166976.jpeg"/>
            </div>
            
            <MyPosts/>
        </div>
    );
}

export default Content;