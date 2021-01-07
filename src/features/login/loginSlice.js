import { createSlice } from '@reduxjs/toolkit';
import { loginApi } from '../../services/login';
export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
        phone: undefined,
        password: undefined,
        response: undefined,
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.password = action.payload.password;
            state.phone = action.payload.phone;
            state.response = action.payload.response;
        }
    },
});
export const { login } = loginSlice.actions;
export const selectLoginStatus = state => state.login.isLoggedIn;
export const selectNickname = state => state.login.response ? state.login.response.profile.nickname : undefined;
export const selectAvatarSrc = state => state.login.response ? state.login.response.profile.avatarUrl : undefined;
export const asyncLogin = (phone, password) =>
    async dispatch => {
        const response = await loginApi(phone, password);
        console.log(response);
        dispatch(login({ password: password, phone: phone, response: response }));
    }

export default loginSlice.reducer;