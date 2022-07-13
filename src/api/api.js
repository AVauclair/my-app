import * as axios from "axios";

let instance = axios.create ({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "a9656320-dc6b-4aa8-9f6b-1296cf829011"}
})

export const UserAPI = {
    requestUsers(currentPage, pageSize) {
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
    },
    savePhoto(userPhoto) {
        const formData = new FormData()
        formData.append("image", userPhoto)

        return instance
        .put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(response => response.data)
    },
}

export const AuthAPI = {
    getAuthData() {
        return instance
        .get(`auth/me`)
        .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance
        .post(`auth/login`, {email, password, rememberMe})
        .then(response => response.data)
    },
    logout() {
        return instance
        .delete(`auth/login`)
        .then(response => response.data)
    },
}