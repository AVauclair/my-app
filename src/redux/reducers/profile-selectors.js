export const getProfile = (state) => {
    return state.profilePage.profile
}

export const getUserStatus = (state) => { 
    return state.profilePage.userStatus
} //название такое же как и у одной thunk'и в профайлРедьюсер, конфликт