import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    withStyles,
} from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { asyncLogin } from '../features/login/loginSlice'
import MyAvatar from './MyAvatar';
const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#c62f2f',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#c62f2f',
        },
    },
})(TextField);
const LoginForm = ({ setPhone, setPassword }) => {

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handlePassChange = (e) => {
        setPassword(e.target.value);
    }
    return (
        <Fragment>
            < CssTextField
                autoFocus
                margin="dense"
                id="name"
                label="请输入注册手机号"
                type="tel"
                fullWidth
                onChange={handlePhoneChange}
            />
            < CssTextField
                margin="dense"
                id="name"
                label="请输入密码"
                type="password"
                fullWidth
                onChange={handlePassChange}
            />
        </Fragment>
    )
}
export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleLogin = () => {
        setOpen(false);
        console.log("dispatch")
        dispatch(asyncLogin(phone, password));
    };

    return (
        <Fragment>
            <MyAvatar handleClickOpen={handleClickOpen} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">登录</DialogTitle>
                <DialogContent >
                    <LoginForm setPassword={setPassword} setPhone={setPhone} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLogin} >
                        登录
                     </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}