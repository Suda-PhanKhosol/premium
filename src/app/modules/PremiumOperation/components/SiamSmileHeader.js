import React from 'react'
import {Grid , Paper ,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    headerImg:{
        margin: "auto",
        display: 'block',
        width: 40,
        height: 50,
        maxWidth: '80%',
        maxHeight: '80%',
        
    },
    paper: {
        padding: theme.spacing(0),
        margin: 'auto',
        maxWidth: '100%',
        height: 40,
        backgroundColor: "#00AEEF",
    },
}));

export default function SiamSmileHeader() {
    const classes = useStyle();
    return (
        <div>
                      <Paper elevation={0} className={classes.paper}>
                               <img className={classes.headerImg} alt="complex" src={process.env.PUBLIC_URL + "/Siamsmilelogo_man_white.png"} />
                      </Paper>
        </div>
    )
}
