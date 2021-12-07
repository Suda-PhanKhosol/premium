import React from 'react'
import {  Grid, Typography  ,Button, Paper} from '@material-ui/core'
import SiamSmileHeader from './SiamSmileHeader';
import { makeStyles   } from "@material-ui/core/styles";
import Footer from './Footer';
import { useHistory } from 'react-router';
 import { useSelector } from 'react-redux';
 import { BillPaymentPDF } from './BillPaymentPDF';
 import imageToBase64 from 'image-to-base64/browser';

 const useStyle = makeStyles((theme) => ({
    TextTitleStyle : {
        fontFamily:'sarabun',
        fontSize:19,
        fontWeight:'bold'
    },
    TextStyle : {
        fontFamily:'sarabun',
        fontSize:11,
        color:'#219EE2'
    },
    TextDetailStyle : {
        fontFamily:'sarabun',
        fontSize:11,
    },
    TextRemarkStyle : {
        fontWeight:'bold',
        fontFamily:'sarabun',
        fontSize:11,
    },
    headerImg:{
        margin: "auto",
        display: 'block',
        width: 30,
        height: 35,
        maxWidth: '80%',
        maxHeight: '80%',
        
    },
}));

export default function BillPaymentToPrint(props) {

    const classes = useStyle();
    const customerPaymentReducer = useSelector(({customerPayment}) => (customerPayment));
    const [qeCodeValue, setQeCodeValue] = React.useState(
        "|"
         +  customerPaymentReducer.qrCodeBillGenFormat.xxx_taxID 
         +  customerPaymentReducer.qrCodeBillGenFormat.xxx_suffix  +  "\n" 
         +  customerPaymentReducer.qrCodeBillGenFormat.xxx_ref1  +  "\n" 
         +  customerPaymentReducer.qrCodeBillGenFormat.xxx_ref2  +  "\n" 
         +  customerPaymentReducer.qrCodeBillGenFormat.xxx_totalAmount 
    );
    
    var QRCode = require("qrcode.react");
	var Barcode = require('react-barcode');


		return (
			<div style={{ width:'auto'}}> 
                  <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        style={{marginTop:10}}
                  >
                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>

                                    <Grid item xs={10} sm={10} md={10} lg={10}>
                                            <Paper style={{width:'100%' ,height:400 , backgroundColor:'#00AEEF'}}>
                                                                <img className={classes.headerImg} alt="complex" src={process.env.PUBLIC_URL + "/Siamsmilelogo_man_white.png"} />
                                                                <Grid container >
                                                                    <Grid
                                                                    container
                                                                    direction="row"
                                                                    justifyContent="center"
                                                                    alignItems="center"
                                                                    style={{width:'98%' ,height:361 , backgroundColor:'white' ,marginTop:1 ,marginLeft:3.5}}
                                                                    >
                                                                            <Barcode
                                                                                value={qeCodeValue}
                                                                                format={"CODE128"}
                                                                                displayValue={true}
                                                                                margin={15}
                                                                                textAlign={"center"}
                                                                                fontSize={15}
                                                                                fontOptions={"italic"}
                                                                                lineColor={"#000000"}
                                                                                background={""}
                                                                                marginBottom={-50}
                                                                            />
                                                                            <Grid
                                                                                container
                                                                                direction="column"
                                                                                justifyContent="center"
                                                                                alignItems="center"
                                                                                style={{marginBottom:0}}
                                                                            >
                                                                                <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                                                                <Grid item xs={10} sm={4} md={8} lg={6}> 
                                                                                        <QRCode
                                                                                            value={qeCodeValue}
                                                                                            size={120}
                                                                                            bgColor={"#ffffff"}
                                                                                            fgColor={"#000000"}
                                                                                            level={"L"}
                                                                                            includeMargin={false}
                                                                                            renderAs={"svg"}
                                                                                            id="QRCode" 
                                                                                            
                                                                                        />
                                                                                </Grid>
                                                                                <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                                                                <br/>
                                                                                <Grid container>
                                                                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                                                                    <Grid item xs={5} sm={5} md={5}  lg={5}>
                                                                                        <Typography className={classes.TextStyle} >วันที่สิ้นสุดการชำระ : </Typography>
                                                                                    </Grid>
                                                                                    <Grid item xs={5} sm={5} md={5}  lg={5}>
                                                                                        <Typography className={classes.TextDetailStyle}> {customerPaymentReducer.billPaymentDetail.xxx_billPaymentLastDate}</Typography>
                                                                                    </Grid>
                                                                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                                                                </Grid>
                                                                                <Grid container>
                                                                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                                                                    <Grid item xs={5} sm={5} md={5}  lg={5}>
                                                                                        <Typography className={classes.TextStyle} >ยอดชำระ : </Typography>
                                                                                    </Grid>
                                                                                    <Grid item xs={5} sm={5} md={5}  lg={5}>
                                                                                        <Typography className={classes.TextDetailStyle}> {customerPaymentReducer.billPaymentDetail.xxx_billPaymentTotal}</Typography>
                                                                                    </Grid>
                                                                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                                                                </Grid>
                                                                                <Grid container>
                                                                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                                                                    <Grid item xs={5} sm={5} md={5}  lg={5}>
                                                                                        <Typography className={classes.TextStyle}>รหัสชำระ : </Typography>
                                                                                    </Grid>
                                                                                    <Grid item xs={5} sm={5} md={5}  lg={5}>
                                                                                        <Typography className={classes.TextDetailStyle}> {customerPaymentReducer.billPaymentDetail.xxx_billPaymentRefCode}</Typography>
                                                                                    </Grid>
                                                                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                                                                </Grid>
                                                                                <br/>
                                                                                <Grid container alignItems="center">
                                                                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                                                                    <Grid item xs={10} sm={10} md={10}  lg={10}>
                                                                                        <Typography style={{textAlign:'center'}} className={classes.TextRemarkStyle} >ท่านสามารถชำระเงินผ่าน Mobile Application ได้ทุกธนาคารโดยมีผลทันที</Typography>
                                                                                    </Grid>
                                                                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                                                                </Grid>
                                                                                
                                                                            </Grid>
                                                                    </Grid>
                                                                </Grid>
                                            </Paper>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                
                                </Grid>

				
			</div>
		);
}
