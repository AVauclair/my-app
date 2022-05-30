import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import ProfileContainer from './Components/Content/Profile/ProfileContainer.jsx';
import News from './Components/Content/News/News.jsx';
import Friends from './Components/Content/Friends/Friends.jsx';
import Audio from './Components/Content/AudioPage/Audio.jsx';
import Settings from './Components/Content/SettingsPage/Settings.jsx';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import MessagesPageContainter from './Components/Content/MessagesPage/MessagesPageContainter';
import UsersPageContainer from './Components/Content/UsersPage/UsersPageContainer';
import LoginPage from './Components/Login/LoginPage';
import React from 'react';
import { initializeApp } from './redux/reducers/appReducer';
import {connect} from "react-redux"
import Preloader from './common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount = () => {
    this.props.initializeApp();
}

  render() {
    if (!this.props.initialized) {return <Preloader/>}

    return (
      <BrowserRouter>
        <div className = "app-body">
          <HeaderContainer/>
          <Navigation/>

          <div className = "main-content">
            <Routes>
              <Route path = "/" element = {<Navigate replace to = "/profile"/>}/>
              <Route path = "/profile/:userID" element = {<ProfileContainer />}/>
              <Route path ='/profile' element={<ProfileContainer />} />
              <Route path = "/news" element = {<News/>}/>
              <Route path = "/messages" element = {<MessagesPageContainter />}/>
              <Route path = "/friends" element = {<Friends/>}/>
              <Route path = "/audio" element = {<Audio/>}/>
              <Route path = "/settings" element = {<Settings/>}/>
              <Route path = "/users" element = {<UsersPageContainer/>}/>
              <Route path = "/login" element= {<LoginPage/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)