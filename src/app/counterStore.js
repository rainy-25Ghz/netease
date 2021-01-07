import counterReducer from '../features/counter/counterSlice';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
export default configureStore({
    reducer: {
        counter: counterReducer,
        login: loginReducer
    },
});
