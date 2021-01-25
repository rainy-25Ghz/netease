import React, { useEffect, useState } from 'react';
import { exclusiveListApi } from '../services/service';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 500,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    wrapper: {
        width: theme.spacing(50),
        height: theme.spacing(24),
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(5),
        marginRight: theme.spacing(3),
    },
    image: {
        width: theme.spacing(50),
        height: theme.spacing(24)
    },
    title: {
        width: theme.spacing(50),
        cursor: 'pointer'
    },

}));

export const ExclusiveList = () => {
    const classes = useStyles();
    const [lists, setLists] = useState([]);
    useEffect(() => {
        exclusiveListApi().then((lists) => {
            setLists(lists);
        })
    }, []);
    return (
        <div className='root'>
            <div className={classes.row} >
                <div className={classes.row}>
                    {lists.map((item, index) => {

                        return (
                            <div className={classes.wrapper} key={index}>
                                <img className={classes.image} src={item.picUrl} alt="no pic" />
                                <Typography className={classes.title} variant="body1" gutterBottom>
                                    {item.name}
                                </Typography>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}