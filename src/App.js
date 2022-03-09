import './App.css';
import Header from './Components/Header/Header.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import Profile from './Components/Content/Profile/Profile.jsx';
import MessagesPage from './Components/Content/MessagesPage/MessagesPage.jsx';
import News from './Components/Content/News/News.jsx';
import Friends from './Components/Content/Friends/Friends.jsx';
import Audio from './Components/Content/AudioPage/Audio.jsx';
import Settings from './Components/Content/SettingsPage/Settings.jsx';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
        <div className = "app-body">
          <Header/>
          <Navigation/>

          <div className = "main-content">
            <Routes>
              <Route path = "/" element = {<Navigate replace to = "/profile"/>}/>
              <Route path = "/profile" element = {<Profile state={props.state} dispatch={props.dispatch}/>}/>
              <Route path = "/news" element = {<News/>}/>
              <Route path = "/messages" element = {<MessagesPage state={props.state} dispatch={props.dispatch}/>}/>
              <Route path = "/friends" element = {<Friends/>}/>
              <Route path = "/audio" element = {<Audio/>}/>
              <Route path = "/settings" element = {<Settings/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;