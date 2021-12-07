import React from 'react'
import {  Grid, Typography  ,Button} from '@material-ui/core'
import SiamSmileHeader from '../components/SiamSmileHeader';
import { makeStyles   } from "@material-ui/core/styles";
import Footer from '../components/Footer';
import CustomerPaymentList from '../components/CustomerPaymentList';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const useStyle = makeStyles((theme) => ({
    TextStyle : {
        fontWeight:'bold',
        fontFamily:'sarabun',
        fontSize:22
    },
}));

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}



export default function CustomerPaymentPage() {
    
    const classes = useStyle();
    const history = useHistory();
    const customerPaymentReducer = useSelector(({customerPayment}) => customerPayment)

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
                                    <Typography className={classes.TextStyle} variant="subtitle1">สรุปยอดการชำระ</Typography>
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
                                <Grid item xs={5} sm={5} md={3} lg={2}>
                                    <Typography style={{}}>ยอดชำระเงิน  </Typography>
                                    <Typography style={{fontWeight:'bold'}}>  {customerPaymentReducer.productListPayment.xxx_paymentTotal} บาท</Typography>
                                </Grid>
                                <Grid container item xs={5} sm={5} md={3} lg={2}  justifyContent="flex-end">
                                    <Button 
                                    variant="contained" 
                                    style={{backgroundColor:'#419BF6' , color:'white' ,fontSize:13}}
                                    onClick={() =>{ history.push("/PaymentMethods") }}
                                    >
                                        ช่องทางการชำระ
                                    </Button> 
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                            
                            </Grid>
                            
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                style={{marginTop:20}}
                            >
                                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                <Grid item xs={12} sm={10} md={6} lg={4}>
                                    <CustomerPaymentList></CustomerPaymentList>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                            
                            </Grid>
                </Grid >
                
        </Grid>

        <Footer></Footer>
        </div>
    )
}
