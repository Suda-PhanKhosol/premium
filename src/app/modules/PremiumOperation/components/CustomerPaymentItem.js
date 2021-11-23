import React from 'react'
import { Grid ,Typography , Paper } from '@material-ui/core';


export default function CustomerPaymentItem(props) {
    return (
        <div>
            {/* {JSON.stringify(props.product)} */}
            <Paper variant="outlined" style={{backgroundColor:props.index % 2 === 0 ? 'white' : '#E3E7EA' ,maxWidth:'100%' , height:'auto'}} square  >
                                 <Grid container>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography style={{fontWeight:'bold'}}>ผลิตภัณฑ์</Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography >{props.product.xxx_productName}</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                 </Grid>
                                 <Grid container>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography style={{fontWeight:'bold'}}>แผน</Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography >{props.product.xxx_productType}</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                 </Grid>
                                 <Grid container>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography style={{fontWeight:'bold'}}>ประเภทการจ่าย</Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography >{props.product.xxx_paymentType}</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                 </Grid>
                                 <Grid container>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography style={{fontWeight:'bold'}}>เบี้ย</Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography >{props.product.xxx_premium}     บาท</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                 </Grid>
                                 <Grid container>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography style={{fontWeight:'bold'}}>ชื่อผู้เอาประกัน/รายละเอียด</Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography >{props.product.xxx_insuredName}</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                 </Grid>
              </Paper>
        </div>
    )
}
