import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import News from './Components/Content/News/News.jsx';
import Friends from './Components/Content/Friends/Friends.jsx';
import Audio from './Components/Content/AudioPage/Audio.jsx';
import Settings from './Components/Content/SettingsPage/Settings.jsx';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import UsersPageContainer from './Components/Content/UsersPage/UsersPageContainer';
import LoginPage from './Components/Login/LoginPage';
import React, {lazy, Suspense} from 'react';
import { initializeApp } from './redux/reducers/appReducer';
import {connect} from "react-redux"
import Preloader from './common/Preloader/Preloader';

const ProfileContainer = lazy(() => import('./Components/Content/Profile/ProfileContainer.jsx'));
const NewsPage = lazy(() => import('./Components/Content/News/News.jsx'));
const MessagesPageContainter = lazy(() => import('./Components/Content/MessagesPage/MessagesPageContainter'));

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
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path = "/" element = {<Navigate replace to = "/profile"/>}/>
                <Route path = "/profile/:userID" element = {<ProfileContainer/>}/>
                <Route path ='/profile' element = {<ProfileContainer/>}/>
                <Route path = "/news" element = {<NewsPage/>}/>
                <Route path = "/messages" element = {<MessagesPageContainter/>}/>
                <Route path = "/friends" element = {<Friends/>}/>
                <Route path = "/audio" element = {<Audio/>}/>
                <Route path = "/settings" element = {<Settings/>}/>
                <Route path = "/users" element = {<UsersPageContainer/>}/>
                <Route path = "/login" element= {<LoginPage/>}/>
              </Routes>
            </Suspense>
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