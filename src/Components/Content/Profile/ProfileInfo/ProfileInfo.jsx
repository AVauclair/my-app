import module from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div className={module.profileInfoPage}>
      Main content
      <div className={module.picture}>
        <img
          src="http://img2.reactor.cc/pics/post/full/Anime-фэндомы-Чмоня-котёнок-7166976.jpeg"
          alt="not found"
        />
      </div>
      <div>ava + desc</div>
    </div>
  )
}

export default ProfileInfo
