import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import { NeteaseIcon } from './icons/netease';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import GetAppIcon from '@material-ui/icons/GetApp';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import RadioIcon from '@material-ui/icons/Radio';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import FormDialog from './Login';
import Main from './MainPage';
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

const RecommendList = () => {
    return (
        <List>
            <ListItem button key={'发现音乐'}>
                <ListItemIcon> <MusicNoteIcon /> </ListItemIcon>
                <ListItemText primary={'发现音乐'} />
            </ListItem>
            <ListItem button key={'私人FM'}>
                <ListItemIcon> <WifiTetheringIcon /> </ListItemIcon>
                <ListItemText primary={'私人FM'} />
            </ListItem>
            <ListItem button key={'Look直播'}>
                <ListItemIcon> <LiveTvIcon /> </ListItemIcon>
                <ListItemText primary={'Look直播'} />
            </ListItem>
            <ListItem button key={'视频'}>
                <ListItemIcon><VideocamOutlinedIcon /> </ListItemIcon>
                <ListItemText primary={'视频'} />
            </ListItem>
            <ListItem button key={'朋友'}>
                <ListItemIcon> <PeopleOutlineIcon /> </ListItemIcon>
                <ListItemText primary={'朋友'} />
            </ListItem>

            {/* {['发现音乐', '私人FM', 'Look直播', '视频', '朋友'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <MusicNoteIcon /> : <PeopleOutlineIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))} */}
        </List>
    )
}
const MyList = () => {
    return (
        <List>
            <ListItem button key={'本地音乐'}>
                <ListItemIcon> <MusicNoteIcon /> </ListItemIcon>
                <ListItemText primary={'本地音乐'} />
            </ListItem>
            <ListItem button key={'下载管理'}>
                <ListItemIcon> <GetAppIcon /> </ListItemIcon>
                <ListItemText primary={'下载管理'} />
            </ListItem>
            <ListItem button key={'我的音乐云盘'}>
                <ListItemIcon> <FilterDramaIcon /> </ListItemIcon>
                <ListItemText primary={'我的音乐云盘'} />
            </ListItem>
            <ListItem button key={'我的电台'}>
                <ListItemIcon><RadioIcon /> </ListItemIcon>
                <ListItemText primary={'我的电台'} />
            </ListItem>
            <ListItem button key={'我的收藏'}>
                <ListItemIcon> <StarBorderIcon /> </ListItemIcon>
                <ListItemText primary={'我的收藏'} />
            </ListItem>

            {/* {['发现音乐', '私人FM', 'Look直播', '视频', '朋友'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <MusicNoteIcon /> : <PeopleOutlineIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))} */}
        </List>
    )
}
const CreatedList = () => {
    return (
        <List>
            <ListItem button key={'我喜欢的音乐'}>
                <ListItemIcon> <FavoriteBorderIcon /> </ListItemIcon>
                <ListItemText primary={'我喜欢的音乐'} />
            </ListItem>
            <ListItem button key={'创建歌单1'}>
                <ListItemIcon> <QueueMusicIcon /> </ListItemIcon>
                <ListItemText primary={'创建歌单1'} />
            </ListItem>
            <ListItem button key={'创建歌单2'}>
                <ListItemIcon> <QueueMusicIcon /> </ListItemIcon>
                <ListItemText primary={'创建歌单2'} />
            </ListItem>


        </List>
    )
}
const MarkedList = () => {
    return (
        <List>
            <ListItem button key={'收藏歌单1'}>
                <ListItemIcon> <QueueMusicIcon /> </ListItemIcon>
                <ListItemText primary={'收藏歌单1'} />
            </ListItem>
            <ListItem button key={'收藏歌单2'}>
                <ListItemIcon> <QueueMusicIcon /> </ListItemIcon>
                <ListItemText primary={'收藏歌单2'} />
            </ListItem>
            {/* {['发现音乐', '私人FM', 'Look直播', '视频', '朋友'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <MusicNoteIcon /> : <PeopleOutlineIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))} */}
        </List>
    )
}
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
