import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { newSongsApi } from '../services/service';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    clickable: {
        cursor: 'pointer'
    },
    avatar: {
        height: theme.spacing(7),
        width: theme.spacing(7),
        marginRight: theme.spacing(1)
    },
    list: {
        width: theme.spacing(55)
    }
}));

export default function NewSongs() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    useEffect(() => {
        newSongsApi().then(data => {
            if (data) setData(data);
        })
    }, []);
    return (
        <div className={classes.root}>
            <List className={classes.list}>
                {data.slice(0, 4).map(({ album, name, artists }, index) => {
                    return (
                        <ListItem key={index} className={classes.clickable}>
                            <ListItemAvatar>
                                <Avatar variant="rounded" src={album.picUrl} alt='none' className={classes.avatar} />
                            </ListItemAvatar>
                            <ListItemText primary={name} secondary={artists[0].name} />
                        </ListItem>
                    )
                })}
            </List>
            <List className={classes.list}>
                {data.slice(4, 8).map(({ album, name, artists }, index) => {
                    return (
                        <ListItem key={index} className={classes.clickable}>
                            <ListItemAvatar>
                                <Avatar variant="rounded" src={album.picUrl} alt='none' className={classes.avatar} />
                            </ListItemAvatar>
                            <ListItemText primary={name} secondary={artists[0].name} />
                        </ListItem>
                    )
                })}
            </List>
            <List className={classes.list}>
                {data.slice(8, 12).map(({ album, name, artists }, index) => {
                    return (
                        <ListItem key={index} className={classes.clickable}>
                            <ListItemAvatar>
                                <Avatar variant="rounded" src={album.picUrl} alt='none' className={classes.avatar} />
                            </ListItemAvatar>
                            <ListItemText primary={name} secondary={artists[0].name} />
                        </ListItem>
                    )
                })}
            </List>


            {/*            
            <List >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar variant="rounded">
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar variant="rounded">
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar variant="rounded">
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
            </List>

            <List className={classes.clickable} >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar variant="rounded">
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar variant="rounded">
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar variant="rounded">
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
            </List> */}
        </div>

    );
}