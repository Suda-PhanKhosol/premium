import React from 'react'
import { Badge, Grid, Link, Paper, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

function Footer() {
    const useStyle = makeStyles((theme) => ({
        image: {
            width: 90,
            height: 95,
            marginTop: 60,
        },
        imageFotter: {
            width: 30,
            height: 30,
            marginRight: 0,
            marginTop: 5,
            marginBottom: 8
        },
        imageFotter2: {
            width: 30,
            height: 30,
            marginTop: 5,
            marginBottom: 8,
        },
           paper: {
        padding: theme.spacing(0),
        margin: 'auto',
        maxWidth: '100%',
        height: 40,
        backgroundColor: "#00AEEF",
    },
    }));
    const classes = useStyle();
    return (

        <Paper elevation={0} className={classes.paper}>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid container item xs={6} lg={6} direction="row" justifyContent="flex-start" alignItems="center" style={{ paddingLeft: 25 }}  >
                            <Typography variant="caption" style={{ color: "#EEEEEE" }}><b>Call Center โทร 1434</b></Typography>
                        </Grid>
                        <Grid container item xs={6} lg={6} direction="row" justifyContent="flex-end" alignItems="center" style={{ paddingRight: 25 }}>
                            <Badge color="secondary" spacing={1}>
                                <Link href="https://www.facebook.com/siamsmilebroker/" color="textSecondary" target="_blank" rel="noopener" >
                                    <img className={classes.imageFotter} alt="" src={process.env.PUBLIC_URL + "/facebook.png"} />
                                </Link>
                            </Badge>
                            <Badge color="secondary">
                                <Link href="https://www.youtube.com/channel/UC-x4bdgWZCeYqJO5RBFkg7w" color="textSecondary" target="_blank" rel="noopener">
                                    <img className={classes.imageFotter} alt="" src={process.env.PUBLIC_URL + "/youtube.png"} />
                                </Link>
                            </Badge>
                            <Badge color="secondary">
                                <Link href="https://line.me/R/ti/p/%40siamsmile" color="textSecondary" target="_blank" rel="noopener" >
                                    <img className={classes.imageFotter} alt="" src={process.env.PUBLIC_URL + "/line.png"} />
                                </Link>
                            </Badge>
                            <Badge color="secondary">
                                <Link href="https://www.siamsmile.co.th/" color="textSecondary" target="_blank" rel="noopener" >
                                    <img className={classes.imageFotter2} alt="" src={process.env.PUBLIC_URL + "/Group803.png"} />
                                </Link>
                            </Badge>
                        </Grid>
                    </Grid>
            </Paper>
    )
}

export default Footer
