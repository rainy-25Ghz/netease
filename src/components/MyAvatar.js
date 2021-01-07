import React, { Fragment } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { selectAvatarSrc, selectLoginStatus } from '../features/login/loginSlice'
export default function MyAvatar({ handleClickOpen }) {
    const src = useSelector(selectAvatarSrc);
    const loggedIn = useSelector(selectLoginStatus);
    const res = useSelector(state => state.response);
    React.useEffect(() => {

        console.log(res);
    }, [res])
    return (
        <Fragment>
            <Avatar style={{
                width: "24px",
                height: " 24px",
                display: "flex"
            }} alt="Remy Sharp" src={src ? src : "https://static.hdslb.com/images/akari.jpg"} />
            <Button style={{
                color: '#E39999'
            }} onClick={handleClickOpen}>{!loggedIn ? '未登录' : '已登录'}</Button>
            <span>{String(res)}</span>
        </Fragment>
    )
}
