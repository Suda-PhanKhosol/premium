import React from 'react'
import { Grid , Paper ,Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PaySlipItem from './PaySlipItem';
import { useSelector } from 'react-redux';

const useStyle = makeStyles((theme) =>({
    headerImg:{
        margin: "auto",
        width: 69,
        height: 56,
    },
    headerLayout:{

    },
    titleText:{
        color:'white',
        fontFamily:'prompt',
        fontSize:15
    },
    paperLayout :{
        marginLeft:10,
        marginBottom:5
    }
}));

export default function PaySlipList() {

    const classes = useStyle();
	const customerPaymentReducer = useSelector(({ customerPayment }) => customerPayment);


    return (
        <div>
            <br/>
            <Paper elevation={2}  >
                <Grid container className={classes.paperLayout}>
                      <Grid item xs={2} sm={2} md={2} lg={2} style={{marginTop:10}}>
                          <img className={classes.headerImg} alt="complex" src={process.env.PUBLIC_URL + "/logo192.png"}></img>
                      </Grid>
                      <Grid item xs={8} sm={8} md={8} lg={8}  >
                           <Grid container  style={{marginTop:10}}>
                               <Grid item xs={12} sm={12} md={12} lg={12}>
                                   <Typography style={{fontWeight:'bold' ,fontSize:16 ,color:'#828282' ,fontFamily:'prompt'}}>ใบรับฝากเงิน (Pay Slip)</Typography>
                               </Grid>
                               <Grid item xs={12} sm={12} md={12} lg={12}>
                                   <Typography style={{fontWeight:'bold' ,fontSize:16 ,color:'#00AEEF' ,fontFamily:'prompt'}}>บริษัท สยามสไมล์ โบรกเกอร์ (ประเทศไทย) จำกัด</Typography>
                               </Grid>
                               <Grid item xs={12} sm={12} md={12} lg={12}>
                                   <Typography style={{fontSize:10 ,color:'#828282' ,fontFamily:'prompt'}}>เลขที่ 69/6-10 ถนนเฉลิมพงษ์ แขวงสายไหม เขตสายไหม กรุงเทพฯ 10220</Typography>
                               </Grid>
                           </Grid>
                      </Grid>
              
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                              <Paper variant="outlined" style={{backgroundColor:'#00AEEF' ,maxWidth:'100%' , height:50}} square  >
                                  <Grid container  className={classes.paperLayout}>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                             <Typography className={classes.titleText}>วันที่รับชำระ : {customerPaymentReducer.paySlip.xxx_paidDate}</Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5} style={{textAlign:'right'}}>
                                             <Typography  className={classes.titleText}>เวลา : {customerPaymentReducer.paySlip.xxx_timePaid}</Typography>
                                        </Grid>
                                 </Grid>
                                 <Grid container  className={classes.paperLayout}>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                             <Typography  className={classes.titleText}>เลขที่อ้างอิง : {customerPaymentReducer.paySlip.xxx_paidRef}</Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5} style={{textAlign:'right'}}>
                                             <Typography  className={classes.titleText}>Ref1 no. : {customerPaymentReducer.paySlip.xxx_refNo}</Typography>
                                        </Grid>
                                 </Grid>
                              </Paper>
                        </Grid>
                </Grid>
                
              
  
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{marginBottom:20}}
                >
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                                  {customerPaymentReducer.paySlip.xxx_paidDetail.map((paySlipItem , index) => (
                                        <PaySlipItem key={index} paySlip={paySlipItem} index={index}></PaySlipItem>
                                    ))}
                        </Grid>
                </Grid>
			</Grid>
            </Paper>

            
        </div>
    )
}
