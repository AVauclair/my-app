import * as axios from "axios";
import { setUserStatus } from "../redux/reducers/profileReducer";

let instance = axios.create ({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "a9656320-dc6b-4aa8-9f6b-1296cf829011"}
})

export const UserAPI = {
    getUsers(currentPage, pageSize) {
        return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    follow(userID) {
        return instance
        .post(`follow/${userID}`)
        .then(response => response.data)
    },
    unfollow(userID) {
        return instance
        .delete(`follow/${userID}`)
        .then(response => response.data)
    },
}

export const ProfileAPI = {
    getUserProfile(userID) {
        return instance
        .get(`profile/${userID}`)
        .then(response => response.data)
    },
    getUserStatus(userID) {
        return instance
        .get(`profile/status/${userID}`)
        .then(response => response.data)
    },
    updateUserStatus(userStatus) {
        return instance
        .put(`profile/status`, {status: userStatus})
        .then(response => response.data)
    }
}

export const AuthAPI = {
    getAuthData() {
        return instance
        .get(`auth/me`)
        .then(response => response.data)
    },
}