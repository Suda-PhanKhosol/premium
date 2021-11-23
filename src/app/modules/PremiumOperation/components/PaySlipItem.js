import React from 'react';
import { Grid ,Typography , Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    paperLayout:{
        marginLeft:10,
        marginTop:5
    },
    textLabelName :{
        fontFamily:'prompt',
        fontSize:15,
        color:'#A5A5A5'
    },
    textRef : {
        color:'#00AEEF',
        fontFamily:'prompt',
        fontSize:15
    },
    textDetail : {
        fontFamily:'prompt',
        fontSize:15
    }
}))


export default function PaySlipItem(props) {

    const classes = useStyle();
    return (
        <div>
             <Paper variant="outlined" square  >
                <Grid container className={classes.paperLayout} >
                       <Grid item xs={4} sm={4} md={4} lg={4}>
                           <Typography className={classes.textLabelName}>Ref no.</Typography>
                       </Grid>
                       <Grid item xs={8} sm={8} md={8} lg={8}>
                           <Typography className={classes.textRef}>{props.paySlip.xxx_refDetail}</Typography>
                       </Grid>
                </Grid>
                <Grid container className={classes.paperLayout}>
                       <Grid item xs={4} sm={4} md={4} lg={4}>
                           <Typography className={classes.textLabelName}>ผลิตภัณฑ์</Typography>
                       </Grid>
                       <Grid item xs={8} sm={8} md={8} lg={8}>
                           <Typography className={classes.textDetail}>{props.paySlip.xxx_productName}</Typography>
                       </Grid>
                </Grid>
                <Grid container className={classes.paperLayout}>
                       <Grid item xs={4} sm={4} md={4} lg={4}>
                           <Typography className={classes.textLabelName}>แผน</Typography>
                       </Grid>
                       <Grid item xs={8} sm={8} md={8} lg={8}>
                           <Typography className={classes.textDetail}>{props.paySlip.xxx_productType}</Typography>
                       </Grid>
                </Grid>
                <Grid container className={classes.paperLayout}>
                       <Grid item xs={4} sm={4} md={4} lg={4}>
                           <Typography className={classes.textLabelName}>ประเภทการจ่าย</Typography>
                       </Grid>
                       <Grid item xs={8} sm={8} md={8} lg={8}>
                           <Typography className={classes.textDetail}>{props.paySlip.xxx_paymentType}</Typography>
                       </Grid>
                </Grid>
                <Grid container className={classes.paperLayout}>
                       <Grid item xs={4} sm={4} md={4} lg={4}>
                           <Typography className={classes.textLabelName}>เบี้ยประกัน</Typography>
                       </Grid>
                       <Grid item xs={8} sm={8} md={8} lg={8}>
                           <Typography className={classes.textDetail}>{props.paySlip.xxx_premium}</Typography>
                       </Grid>
                </Grid>
                <Grid container className={classes.paperLayout}>
                       <Grid item xs={4} sm={4} md={4} lg={4}>
                           <Typography className={classes.textLabelName}>ชื่อผู้เอาประกัน / รายละเอียด</Typography>
                       </Grid>
                       <Grid item xs={8} sm={8} md={8} lg={8}>
                           <Typography className={classes.textDetail}>{props.paySlip.xxx_insuredName}</Typography>
                       </Grid>
                </Grid>
                {/* <Divider/> */}
              </Paper>
        </div>
    )
}
