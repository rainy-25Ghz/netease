import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
export const CreatedList = () => {
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