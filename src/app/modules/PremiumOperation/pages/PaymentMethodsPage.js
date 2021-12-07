import React from 'react'
import {  Grid, FormControlLabel , Paper, Typography ,Radio , Button} from '@material-ui/core'
import SiamSmileHeader from '../components/SiamSmileHeader';
import { makeStyles } from "@material-ui/core/styles";
import Footer from '../components/Footer';
import { useWindowSize } from 'react-use';
import { useFormik } from "formik";
import { useHistory } from 'react-router';

const useStyle = makeStyles((theme) => ({
    TextStyle : {
        fontWeight:'bold',
        fontFamily:'sarabun',
        fontSize:14
    },
    imgCard: {
        width: 30,
        height: 40,
        marginRight: 0,
        marginTop: 10,
        marginLeft:5
    },
    visaImg: {
        width: 40,
        height: 30,
        marginRight: 0,
        marginTop: 10,
        marginLeft:20
    },
}));

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}


export default function PaymentMethodsPage() {
    const classes = useStyle();
    const history = useHistory();
    const [selectedValue, setSelectedValue] = React.useState('a');

    const { width, height } = useWindowSize();


    const formik = useFormik({
		enableReinitialize: true,
		validate: (values) => {
			const errors = {};

			return errors;
		},
		initialValues: {
			qrCodeRadio: "1"
		},
		onSubmit: (values) => {
            selectedValue === 'qrCodeRadio' ? history.push("/BillPaymentMethod") : history.push("/CardPaymentMethod");
			formik.setSubmitting(false);
		},
	});

    const handleChangeRadio = (event) => {
        setSelectedValue(event.target.value);
      };


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
        <form onSubmit={formik.handleSubmit}>
        
      
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
             style={{  backgroundColor:'#DFF3FB' }}
             >
                 <Grid container   >
       
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                style={{marginTop:30}}
                            >
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={10} sm={10} md={6} lg={4}>
                                            <Typography style={{ fontWeight:'bold', fontFamily:'sarabun', fontSize:22 }}>เลือกวิธีการชำระเบี้ยประกัน</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}> </Grid>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={10} sm={10} md={6} lg={4}>
                                            <Typography style={{  fontFamily:'sarabun', fontSize:18 }}>ช่องทางการชำระหน้างาน</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}> </Grid>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                style={{marginTop:30}}
                            >
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                            <Grid item xs={10} sm={10} md={6} lg={4}>
                                                    <Paper elevation={3} style={{maxWidth:'100%' , height:60 }} >
                                                            <Grid
                                                            container
                                                            direction="row"
                                                            justifyContent="space-between"
                                                            alignItems="center"
                                                            >
                                                                <Grid  item   > 
                                                                    <img
                                                                    className={classes.imgCard}
                                                                    alt=""
                                                                    src={process.env.PUBLIC_URL + "/qr-code.png"}
                                                                    />
                                                                </Grid>
                                                                <Grid  item   >
                                                                    <Typography variant="subtitle1" className={classes.TextStyle}>Bill payment/QR/Barcode</Typography> 
                                                                </Grid>
                                                                <Grid  item   >
                                                                    <Typography variant="subtitle1" className={classes.TextStyle}></Typography> 
                                                                </Grid>
                                                                <Grid  item  >
                                                                    <FormControlLabel 
                                                                    formik={formik}
                                                                    value="qrCodeRadio" 
                                                                    control={<Radio />} 
                                                                    label=""
                                                                    checked={selectedValue  === 'qrCodeRadio'}
                                                                    onChange={handleChangeRadio}
                                                                    name="radio-buttons"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                    </Paper>
                                            </Grid>
                                            <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{marginTop:30}}
                                >
                            
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={10} sm={10} md={6} lg={4}>
                                            <Paper elevation={3} style={{maxWidth:'100%' , height:60 }}>
                                                    <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                    >
                                                        <Grid  item   > 
                                                            <img
                                                            className={classes.imgCard}
                                                            alt=""
                                                            src={process.env.PUBLIC_URL + "/credit-cards.png"}
                                                            />
                                                        </Grid>
                                                        <Grid  item   >
                                                            <Typography variant="subtitle1" className={classes.TextStyle}>บัตรเครดิต/เดบิต</Typography> 
                                                        </Grid>
                                                        <Grid  item   > 
                                                            <img
                                                            className={classes.visaImg}
                                                            alt=""
                                                            src={process.env.PUBLIC_URL + "/visa-master.png"}
                                                            />
                                                        </Grid>
                                                        <Grid  item  >
                                                            <FormControlLabel 
                                                            formik={formik}
                                                            value="visaCardRadio" 
                                                            control={<Radio />} 
                                                            label=""
                                                            label=""
                                                            checked={selectedValue  === 'visaCardRadio'}
                                                            onChange={handleChangeRadio}
                                                            name="radio-buttons"
                                                            
                                                            />
                                                        </Grid>
                                                    </Grid>
                                            </Paper>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>

                            </Grid>
                            <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{marginTop:170 , marginBottom:10}}
                                >
                            
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={10} sm={10} md={3} lg={3}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                style={{ color: "#FFFFFF", backgroundColor: "#2882DC", marginTop: 15 }}
                                                variant="contained"
                                                size="small"
                                            >
                                                ยืนยันบล็อก
                                            </Button>
                                            
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>

                            </Grid>
                            <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{marginBottom:100}}

                                >
                            
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={10} sm={10} md={3} lg={3}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                style={{ color: "#2882DC", backgroundColor: "#FFFFFF", marginTop: 15 }}
                                                variant="contained"
                                                size="small"
                                                onClick={() => {history.push("/CustomerPayment");}}
                                            >
                                                ย้อนกลับ
                                            </Button>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>

                            </Grid>
                </Grid>
            </Grid>
            <Footer></Footer>

        
       
        </form>
    )
}
