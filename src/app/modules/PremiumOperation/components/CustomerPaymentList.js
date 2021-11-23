import { Grid ,Typography , Paper } from '@material-ui/core';
import React from 'react'
import { useSelector } from "react-redux";
import CustomerPaymentItem from './CustomerPaymentItem'
function CustomerPaymentList() {
	const customerPaymentReducer = useSelector(({ customerPayment }) => customerPayment);

	return (
		<div >
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
                >
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                              <Paper variant="outlined" style={{backgroundColor:'#00AEEF' ,maxWidth:'100%' , height:50}} square  >
                                  <Grid container>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={10} sm={10} md={10} lg={10}>
                                             <Typography style={{fontWeight:'bold',color:'white' }}>PAYMENT FOR Siam Smile Broker (Thailand Co,. Ltd.)</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                 </Grid>
                              </Paper>
                        </Grid>
                </Grid>
                
                
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                              <Paper variant="outlined" style={{backgroundColor:'#E3E7EA' ,maxWidth:'100%' , height:'auto'}} square  >
                                 <Grid container>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography style={{fontWeight:'bold'}}>รหัสแจ้งชำระ</Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography >{customerPaymentReducer.productListPayment.xxx_paymentRefCode}</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                 </Grid>
                                 <Grid container>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography style={{fontWeight:'bold'}}>จำนวนรายการ</Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography >{customerPaymentReducer.productListPayment.xxx_itemAmount} รายการ</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                 </Grid>
                                 <Grid container>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography style={{fontWeight:'bold'}}>กำหนดชำระ</Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography >{customerPaymentReducer.productListPayment.xxx_paymentDueDate}</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                 </Grid>
                                 <Grid container>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography style={{fontWeight:'bold'}}>ยอดเงินชำระ</Typography>
                                        </Grid>
                                        <Grid item xs={5} sm={5} md={5} lg={5}>
                                            <Typography >{customerPaymentReducer.productListPayment.xxx_paymentTotal} บาท</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
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
                                  {customerPaymentReducer.productListPayment.xxx_productDetail.map((productItem , index) => (
                                        <CustomerPaymentItem key={index} product={productItem} index={index}></CustomerPaymentItem>
                                    ))}
                        </Grid>
                </Grid>
			</Grid>
		</div >

	)
}

export default CustomerPaymentList
