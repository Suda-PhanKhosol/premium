import React, { useRef } from 'react';
import {  Grid, Typography  ,Button, Paper} from '@material-ui/core'
import SiamSmileHeader from '../components/SiamSmileHeader';
import { makeStyles   } from "@material-ui/core/styles";
import Footer from '../components/Footer';
import { useHistory } from 'react-router';
 import { useSelector } from 'react-redux';
 import { BillPaymentPDF } from '../components/BillPaymentPDF'; 
 import imageToBase64 from 'image-to-base64/browser';
 import ReactToPrint from 'react-to-print';
 import BillPayment from '../components/BillPayment'; //แม่สามารถดึงของในลูกมาใช้ได้ทุกอย่าง ?
 import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

const useStyle = makeStyles((theme) => ({
    TextTitleStyle : {
        fontFamily:'sarabun',
        fontSize:19,
        fontWeight:'bold'
    }
}));

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function BillPaymentMthdPage() {
    
    const componentRef = useRef();
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


    const [encodeAllImg, setEncodeAllImg] = React.useState([]);
    const [encodeQRCode, setEncodeQRCode] = React.useState("")


    const onImageCownload = (checkEventDownload) => {

            var svg  = document.getElementById("QRCode");
           
            const svgData = new XMLSerializer().serializeToString(svg);
            const canvas = document.createElement("canvas");
            var pngFile ;
            var enCodeQRCode ; //Reuse in PDF
            const ctx = canvas.getContext("2d");
            const img = new Image();
            img.onload = () => {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              pngFile = canvas.toDataURL("image/png");

              if(checkEventDownload){
                const downloadLink = document.createElement("a");
                downloadLink.download = "Siamsmile QR-Code Payment";
                downloadLink.href = `${pngFile}`;
                downloadLink.click();
              }
              
              enCodeQRCode  = `data:image/png;base64,${btoa(svgData)}`;
              console.log(pngFile);
              setEncodeQRCode(pngFile);
            };
            img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;

       
      };
   
      const handleOpenPDF = () => {
        console.log(encodeAllImg);
        console.log(encodeQRCode);
        BillPaymentPDF( customerPaymentReducer.productListPayment ,customerPaymentReducer.billPaymentDetail ,encodeAllImg ,encodeQRCode);

	 }


     const EnCodeAllImg = () =>   
        new Promise((resolve) => {
            console.log('start encode');

         let enCodeAllImgArray = [];
         let nameOfAllImg = [
             `${process.env.PUBLIC_URL + "/KTNK.png"}` ,
             `${process.env.PUBLIC_URL + "/512x512bb.jpg"}` ,
             `${process.env.PUBLIC_URL + "/kbank.jpg"}` ,
             `${process.env.PUBLIC_URL + "/KTB.jpg"}` ,
             `${process.env.PUBLIC_URL + "/scb.jpg"}` ,
             `${process.env.PUBLIC_URL + "/Oamsin.jpg"}` ,
             `${process.env.PUBLIC_URL + "/TMB.png"}` ,
             `${process.env.PUBLIC_URL + "/bualuang.png"}` ,
             `${process.env.PUBLIC_URL + "/BPbackground.jpeg"}` ,
             `${process.env.PUBLIC_URL + "/logo192.png"}` ,

        ];
         for(var index in nameOfAllImg){
            
            imageToBase64(nameOfAllImg[index]) // Image URL
                .then(
                    (response) => {
                        let encodeString = 'data:image/svg+xml;base64,' +response ;
                        enCodeAllImgArray.push(encodeString);
                    }
                )
                .catch(
                    (error) => {
                        console.log('error!!',error); // Logs an error if there was one
                    }
                )
         }

         setEncodeAllImg(enCodeAllImgArray);

        resolve();
     })


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


    React.useEffect(() => {

        //เรียกใช้ฟังก์ชันเพื่อ encode QR-Code ที่ต้องใช้ใน PDF เก็บไว้ก่อน
        onImageCownload(false);

        //เรียกใช้ฟังก์ชันเพื่อ encode รูปทั้งหมดที่ต้องใช้ใน PDF เก็บไว้ก่อน
        EnCodeAllImg();
        
    }, [qeCodeValue]);

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
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={1} sm={1} md={1} lg={1} ></Grid>
                                    <Grid item xs={10} sm={8} md={4} lg={4}> 
                                        <Typography className={classes.TextTitleStyle} variant="subtitle1">ใบแจ้งชำระหนี้ (Bill Payment)</Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}>  </Grid>
                                
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={10} sm={8} md={4} lg={4}>
                                        <Typography style={{fontSize:14}}>ทำรายการผ่านโมบายแบงค์กิ้งได้ทุกธนาคาร ชำระภายใน 24 ชม. มิเช่นนั้นรายการชำระของคุณจะถูกยกเลิก</Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{marginTop:10}}
                                >
                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>

                                    <Grid item xs={12} sm={8} md={4} lg={3}>
                                         <BillPayment ref={componentRef} />
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
                                        {/* <ReactToPrint
                                            trigger={() => (
                                                <Button variant="contained" style={{backgroundColor:'#00AEEF' , color:'white', width:230}} fullWidth onClick={() =>{onImageCownload(true)}}>
                                                        Download QR / BarCode
                                                </Button>
                                            )}
                                            content={() => componentRef.current}
                                        /> */}
                                        <Button  
                                            variant="contained" 
                                            style={{backgroundColor:'#00AEEF' , color:'white', width:230}} 
                                            fullWidth  
                                            onClick={() => exportComponentAsPNG(componentRef)}
                                        >
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
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1}>  </Grid>
                                
                                </Grid>
                               

                </Grid >
                
        </Grid>

        <Footer></Footer>
        </div>
    )
}

