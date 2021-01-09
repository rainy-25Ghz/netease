import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { useSelector } from 'react-redux';
import { selectPlaylist } from '../features/login/loginSlice'
export const CreatedList = () => {
    const playlist = useSelector(selectPlaylist);
    if (playlist) return (
        <List>
            {playlist.map((value, index) => {
                if (index === 0) return (
                    <ListItem button key={'我喜欢的音乐'}>
                        <ListItemIcon> <FavoriteBorderIcon /> </ListItemIcon>
                        <ListItemText primary={'我喜欢的音乐'} />
                    </ListItem>
                );
                if (!value.subscribed) return (
                    <ListItem button key={index}>
                        <ListItemIcon> <FavoriteBorderIcon /> </ListItemIcon>
                        <ListItemText primary={value.name} />
                    </ListItem>
                )
                else return;
            })}
        </List>)
    else return (<List>
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