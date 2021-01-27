import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { recommendedDjsApi } from '../services/service';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    wrapper: {
        width: theme.spacing(27),
        height: theme.spacing(18),
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(5),
        marginRight: theme.spacing(3),
    },
    image: {
        width: theme.spacing(27),
        height: theme.spacing(18),
        borderRadius: theme.spacing(1)
    },
    title: {
        width: theme.spacing(27),
        cursor: 'pointer'
    },
}))



function RecommendDj() {
    const classes = useStyles();
    const [result, setResult] = useState([]);
    useEffect(() => {
        recommendedDjsApi().then(result => {
            if (result) {
                setResult(result);
            }
        })
    }, [])
    return (
        <div className={classes.root}>
            <div className={classes.row}>
                {result.slice(0, 5).map((item, index) => {
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
    )
}

export default RecommendDj
