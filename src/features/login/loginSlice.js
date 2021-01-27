
import { createSlice } from '@reduxjs/toolkit';
import { loginApi, playListApi } from '../../services/service';
export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
        phone: undefined,
        password: undefined,
        response: undefined,
        uid: undefined,
        playlist: undefined
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.password = action.payload.password;
            state.phone = action.payload.phone;
            state.response = action.payload.response;
            state.uid = action.payload.uid;
            state.playlist = action.payload.playlist;
        }
    },
});
export const { login } = loginSlice.actions;
export const selectLoginStatus = state => state.login.isLoggedIn;
export const selectNickname = state => state.login.response ? state.login.response.profile.nickname : undefined;
export const selectAvatarSrc = state => state.login.response ? state.login.response.profile.avatarUrl : undefined;
export const selectPlaylist = state => state.login.playlist ? state.login.playlist : undefined;
export const asyncLogin = (phone, password) =>
    async dispatch => {
        const response = await loginApi(phone, password);
        const uid = response.profile.userId;
        if (!uid) return;
        const playlist = (await playListApi(uid)).playlist;
        dispatch(login({ password: password, phone: phone, response: response, uid: uid, playlist: playlist }));
    }

export default loginSlice.reducer;