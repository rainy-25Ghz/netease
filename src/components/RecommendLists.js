import React, { useEffect, useState } from 'react';
import { recommendListApi } from '../services/service';
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
        width: theme.spacing(28),
        height: theme.spacing(28),
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(5),
        marginRight: theme.spacing(3),
    },
    image: {
        width: theme.spacing(28),
        height: theme.spacing(28)
    },
    title: {
        width: theme.spacing(28),
        cursor: 'pointer'
    },

}));

export const RecommendLists = () => {
    const classes = useStyles();
    const [lists, setLists] = useState([]);
    useEffect(() => {
        recommendListApi(10).then((lists) => {
            setLists(lists);
        })
    }, []);
    return (
        <div className='root'>
            <div className={classes.row} >
                <div className={classes.row}>
                    {lists.map((item, index) => {
                        if (index < 5)
                            return (
                                <div className={classes.wrapper} key={index}>
                                    <img className={classes.image} src={item.picUrl} alt="no pic" />
                                    <Typography className={classes.title} variant="body1" gutterBottom>
                                        {item.name}
                                    </Typography>
                                </div>
                            )
                        else return null;
                    })}
                </div>
            </div>
            <div className={classes.row}  >
                <div className={classes.row}>
                    {lists.map((item, index) => {
                        if (index >= 5)
                            return (
                                <div className={classes.wrapper} key={index}>
                                    <img className={classes.image} src={item.picUrl} alt="no pic" />
                                    <Typography className={classes.title} variant="body1" gutterBottom>
                                        {item.name}
                                    </Typography>
                                </div>
                            )
                        else return null;
                    })}
                </div>
            </div>
        </div>
    )
}