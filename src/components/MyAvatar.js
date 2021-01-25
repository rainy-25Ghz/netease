import React, { Fragment } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { selectAvatarSrc, selectLoginStatus, selectNickname } from '../features/login/loginSlice';
const DEFAULT_AVATAR_URL = "https://static.hdslb.com/images/akari.jpg";
export default function MyAvatar({ handleClickOpen }) {
    const src = useSelector(selectAvatarSrc);
    const name = useSelector(selectNickname)
    const loggedIn = useSelector(selectLoginStatus);
    // const src = useSelector(state => state.login.response ? state.login.response.profile.avatarUrl : undefined);
    return (
        <Fragment>
            <Avatar style={{
                width: "24px",
                height: " 24px",
                display: "flex"
            }} alt="Remy Sharp" src={src ? src : DEFAULT_AVATAR_URL} />
            <Button style={{
                color: 'white'
            }} onClick={handleClickOpen}>{!loggedIn ? '未登录' : name}</Button>
        </Fragment>
    )
}
