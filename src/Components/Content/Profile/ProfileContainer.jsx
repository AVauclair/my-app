import Profile from "./Profile"
import React from "react"
import { setUserProfile } from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserAPI } from "../../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userID = this.props.router.params.userID

        UserAPI.getUserProfile(userID)
        .then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{ location, navigate, params }} />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))