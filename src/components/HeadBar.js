
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { NeteaseIcon, AppearanceIcon } from './icons/netease';
import SearchIcon from '@material-ui/icons/Search';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
const style = {
    'backgroundColor': '#c62f2f',
    'zIndex': '1201',
    'height': '50px',
    'display': 'flex',
}
const useStyles = makeStyles((theme) => ({

    menuButton: {
        marginRight: theme.spacing(2),
    },
    inputInput: {
        marginLeft: '2em'
    },
    space: {
        flexGrow: '1',
        display: 'block',
    },
    Avatar: {
        display: 'flex',
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    menuIcon: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        color: '#E39999'
    },
    textButton: {
        marginLeft: theme.spacing(0),
        color: '#E39999'
    }
}));
const search = {
    position: 'relative',
    borderRadius: '12px',
    backgroundColor: 'rgba(168, 40, 40, 1)',
    marginLeft: '2em',
    width: '20%',
    height: "50%",
};

const inputInput = {
    display: 'flex',
    width: '100%',
    color: '#cd8282'
};

const searchIcon = {
    color: 'white',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '85%'
}

export default function HeadBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" style={style} zIndex="modal">
            <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <NeteaseIcon></NeteaseIcon>
                </IconButton>
                <Typography variant="h6" color="inherit">
                    网易云音乐
                     </Typography>
                <div style={search}>
                    <div style={searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        className={classes.inputInput}
                        style={inputInput}
                        placeholder="搜索音乐，视频，歌词，电台"
                    />
                </div>
                <div className={classes.space}></div>
                <Avatar className={classes.Avatar} alt="Remy Sharp" src="https://static.hdslb.com/images/akari.jpg" />
                <Button className={classes.textButton}>未登录</Button>
                <IconButton>
                    <Badge>
                        <MailOutlineIcon className={classes.menuIcon}></MailOutlineIcon>
                    </Badge>
                </IconButton>
                <IconButton>
                    <Badge>
                        <SettingsOutlinedIcon className={classes.menuIcon}></SettingsOutlinedIcon>
                    </Badge>
                </IconButton>

            </Toolbar>
        </AppBar>

    );
}