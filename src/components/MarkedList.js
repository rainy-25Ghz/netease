import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { useSelector } from 'react-redux';
import { selectPlaylist } from '../features/login/loginSlice';

export const MarkedList = () => {
    const playlist = useSelector(selectPlaylist);
    if (playlist) {
        return (
            <List>
                {
                    playlist.map((value, index) => {
                        if (value.subscribed) {
                            return (
                                <ListItem button key={index}>
                                    <ListItemIcon> <QueueMusicIcon /> </ListItemIcon>
                                    <ListItemText primary={value.name} />
                                </ListItem>)
                        }
                    })
                }
            </List>

        )
    }
    else return (
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