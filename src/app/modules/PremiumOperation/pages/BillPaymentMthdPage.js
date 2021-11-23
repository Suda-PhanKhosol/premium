import React from 'react'
import {  Grid, Typography  ,Button, Paper} from '@material-ui/core'
import SiamSmileHeader from '../components/SiamSmileHeader';
import { makeStyles   } from "@material-ui/core/styles";
import Footer from '../components/Footer';
import { useHistory } from 'react-router';
 import { useSelector } from 'react-redux';
 import { BillPaymentPDF } from '../components/BillPaymentPDF';
//  import BackIcon from '@material-ui/icons/KeyboardBackspace'

const useStyle = makeStyles((theme) => ({
    TextTitleStyle : {
        fontFamily:'sarabun',
        fontSize:22,
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

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function BillPaymentMthdPage() {
    
    const classes = useStyle();
    const history = useHistory();
    const customerPaymentReducer = useSelector(({customerPayment}) => (customerPayment));
    const [qeCodeValue, setQeCodeValue] = React.useState(
        "|"
         +  customerPaymentReducer.qrCodeBillGenFormat.xxx_taxID 
         +  customerPaymentReducer.qrCodeBillGenFormat.xxx_suffix  +  "\n" 
         +  customerPaymentReducer.qrCodeBillGenFormat.xxx_ref1  +  "\n" 
         +  customerPaymentReducer.qrCodeBillGenFormat.xxx_ref2  +  "\n" 
         +  customerPaymentReducer.qrCodeBillGenFormat.xxx_totalAmount 
    );
    const [encodeImg, setEncodeImg] = React.useState( "sdf" )

    var QRCode = require("qrcode.react");
	var Barcode = require('react-barcode');

    const onImageCownload = () => {
        for(var i = 0 ; i < 2 ; i++){
            var svg ;
            if(i===0){
              svg = document.getElementById("QRCode");
            }
            // if(i===1){
            //      svg = document.getElementById("div-svg");
            //     //  svg = document.getElementById("barcode-canvas");
            // }
            const svgData = new XMLSerializer().serializeToString(svg);
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const img = new Image();
            img.onload = () => {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              const pngFile = canvas.toDataURL("image/png");
              const downloadLink = document.createElement("a");
              downloadLink.download = "Siamsmile QR-Code Payment";
              downloadLink.href = `${pngFile}`;
              downloadLink.click();
            };
            img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;

        }
       
      };
      
      const handleOpenPDF = () => {
		BillPaymentPDF( customerPaymentReducer.productListPayment ,customerPaymentReducer.billPaymentDetail);
	 }

     const handleEncode = () => {
        const imageToBase64 = require('image-to-base64');
        const pt = require("path");
        var path = `${process.env.PUBLIC_URL + "/visa-master.png"}`
		var imgBase64 =  imageToBase64(path) // Image URL
            .then(
                (response) => {
                    console.log('success',response); // "iVBORw0KGgoAAAANSwCAIA..."
                    imgBase64 = response ;
                }
            )
            .catch(
                (error) => {
                    console.log('error!!',error); // Logs an error if there was one
                }
            )
        setEncodeImg(`data:image/svg+xml;base64,`);
	 }

    const [windowDimensions, setWindowDimensions] = React.useState(
		getWindowDimensions()
	);

	React.useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);

        
	}, []);
    return (
        <div>
            <SiamSmileHeader></SiamSmileHeader>
         
               
         <Grid 
             style={{
                height: windowDimensions.height,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            container 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center" 
            style={{  backgroundColor:''  }}
         >
                    <Grid
                        container
                        spacing={0}
                        style={{  minHeight: windowDimensions.height }}
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={1} sm={1} md={1} ></Grid>
                                    <Grid item xs={10} sm={10} md={10}> 
                                        {/* <BackIcon></BackIcon> */}
                                        <Typography className={classes.TextTitleStyle} variant="subtitle1">ใบแจ้งชำระหนี้ (Bill Payment)</Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1}>  </Grid>
                                
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={10} sm={10} md={6} lg={4}>
                                        <Typography >ทำรายการผ่านโมบายแบงค์กิ้งได้ทุกธนาคาร ชำระภายใน 24 ชม. มิเช่นนั้นรายการชำระของคุณจะถูกยกเลิก</Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                
                                </Grid>
                                {encodeImg}
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{marginTop:20}}
                                >
                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>

                                    <Grid item xs={7} sm={4} md={3} lg={3}>
                                                <Paper style={{width:'100%' ,height:400 , backgroundColor:'#00AEEF'}}>
                                                    <img className={classes.headerImg} alt="complex" src={process.env.PUBLIC_URL + "/Siamsmilelogo_man_white.png"} />
                                                    <Grid container >
                                                        <Grid
                                                        container
                                                        direction="row"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        style={{width:'98%' ,height:360 , backgroundColor:'white' ,marginTop:2 ,marginLeft:3}}
                                                        >
                                                                <Barcode
                                                                    value={qeCodeValue}
                                                                    format={"CODE128"}
                                                                    displayValue={true}
                                                                    margin={10}
                                                                    textAlign={"center"}
                                                                    fontSize={15}
                                                                    fontOptions={"italic"}
                                                                    lineColor={"#000000"}
                                                                    background={""}
                                                                    marginBottom={-20}
                                                                    id="BarCode"
                                                                />
                                                                <Grid
                                                                    container
                                                                    direction="column"
                                                                    justifyContent="center"
                                                                    alignItems="center"
                                                                    style={{marginBottom:0}}
                                                                >
                                                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                                                    <Grid item xs={8} sm={4} md={4} lg={6}> 
                                                                            <QRCode
                                                                                value={qeCodeValue}
                                                                                size={100}
                                                                                bgColor={"#ffffff"}
                                                                                fgColor={"#000000"}
                                                                                level={"L"}
                                                                                includeMargin={false}
                                                                                renderAs={"svg"}
                                                                                id="QRCode" 
                                                                                // imageSettings={{
                                                                                // src:
                                                                                //     "https://image.makewebeasy.net/makeweb/0/NMOB3ab6S/Home/logo.png",
                                                                                // x: null,
                                                                                // y: null,
                                                                                // height: 25,
                                                                                // width: 25,
                                                                                // excavate: true,
                                                                                // }}
                                                                                // style={marginTop:10}
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
                                                                            <Typography className={classes.TextRemarkStyle} >ท่านสามารถชำระเงินผ่าน Mobile Application ได้ทุกธนาคารโดยมีผลทันที</Typography>
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

                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{marginTop:20}}

                                >
                                    <Grid item xs={1} sm={1} md={1} ></Grid>
                                    <Grid item xs={10} sm={10} md={10}>
                                            <Button variant="contained" style={{backgroundColor:'#00AEEF' , color:'white', width:230}} fullWidth onClick={() =>{onImageCownload()}}>
                                                    Download QR / BarCode
                                            </Button>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1}>  </Grid>
                                
                                </Grid>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{marginTop:20}}

                                >
                                    <Grid item xs={1} sm={1} md={1} ></Grid>
                                    <Grid item xs={10} sm={10} md={10}>
                                            <Button variant="contained" style={{backgroundColor:'#00AEEF' , color:'white', width:230}}  onClick={()=>{handleOpenPDF()}}>
                                                Open Bill Payment
                                            </Button>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1}>  </Grid>
                                
                                </Grid>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{marginTop:20}}

                                >
                                    <Grid item xs={1} sm={1} md={1} ></Grid>
                                    <Grid item xs={10} sm={10} md={10}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            style={{ color: "#2882DC", backgroundColor: "#FFFFFF", marginTop: 15, width:230 }}
                                            variant="contained"
                                            size="small"
                                            onClick={() => {history.push("/PaymentMethods");}}
                                        >
                                            ย้อนกลับ
                                        </Button>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            style={{ color: "#2882DC", backgroundColor: "#FFFFFF", marginTop: 15, width:230 }}
                                            variant="contained"
                                            size="small"
                                            onClick={() => {handleEncode()}}
                                        >
                                            Encode
                                        </Button>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1}>  </Grid>
                                
                                </Grid>
                   
                 

                </Grid >
                
        </Grid>

        <Footer></Footer>
        </div>
    )
}

