import module from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';


const Profile = (props) => {
    return (
        <div className = {module.profile}>
            Main content

            <div className = {module.picture}>
                <img src = "http://img2.reactor.cc/pics/post/full/Anime-фэндомы-Чмоня-котёнок-7166976.jpeg" alt = "not found"/>
            </div>
            
            <MyPosts/>
        </div>
    );
}

export default Profile;