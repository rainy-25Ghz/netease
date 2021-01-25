import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    headerWrapper: {
        width: theme.spacing(164)
    },
    headerRoot: {
        marginTop: theme.spacing(5),
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    }
}));

export const ListHeader = ({ text }) => {
    const classes = useStyles();
    return (
        <div className={classes.headerRoot}>
            <div className={classes.headerWrapper} >
                <Typography variant='h5' gutterBottom>
                    {text}
                </Typography>
                <Divider />
            </div>
        </div>
    )
}