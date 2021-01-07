import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import { NeteaseIcon } from './icons/netease';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import FormDialog from './Login';
import Main from './MainPage';
import { MyList } from './MyList';
import { MarkedList } from './MarkedList';
import { CreatedList } from './CreatedList';
import { RecommendList } from './RecommendedList';

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        marginLeft: theme.spacing(2),
    },

    search: {
        position: 'relative',
        borderRadius: '12px',
        backgroundColor: 'rgba(168, 40, 40, 1)',
        marginLeft: '2em',
        width: theme.spacing(40),
        height: "50%",
        display: 'flex',
        alignItems: "center",
    },
    searchIcon: {
        color: '#cd8282',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(3),
    },
    input: {
        marginLeft: theme.spacing(2),
        flex: 1,
        width: theme.spacing(30),
        color: '#cd8282'
    },
    appBar: {
        backgroundColor: '#c62f2f',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
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





export default function ClippedDrawer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <NeteaseIcon />
                    <Typography className={classes.title} variant="h6" noWrap>
                        网易云音乐
                    </Typography>
                    <div className={classes.search}>
                        <InputBase className={classes.input} placeholder="搜索音乐，视频，歌词，电台" />
                        <SearchIcon className={classes.searchIcon} />
                    </div>
                    <div className={classes.space}></div>
                    <FormDialog />
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

            <Drawer

                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div id="scrollBar" className={classes.drawerContainer}>
                    <Typography style={{ paddingLeft: '20px', paddingTop: '10px' }} variant="h6" noWrap>
                        推荐
                    </Typography>
                    <RecommendList />
                    <Divider />
                    <Typography style={{ paddingLeft: '20px', paddingTop: '10px' }} variant="h6" noWrap>
                        我的音乐
                    </Typography>
                    <MyList />
                    <Divider />
                    <Typography style={{ paddingLeft: '20px', paddingTop: '10px' }} variant="h6" noWrap>
                        创建的歌单
                    </Typography>
                    <CreatedList />
                    <Divider />
                    <Typography style={{ paddingLeft: '20px', paddingTop: '10px' }} variant="h6" noWrap>
                        收藏的歌单
                    </Typography>
                    <MarkedList />
                </div>
            </Drawer>


            <Main clsName={classes.content} />

        </div >
    );
}
