import React from 'react'
import {  Grid, Typography  } from '@material-ui/core'
import SiamSmileHeader from '../components/SiamSmileHeader';
import { makeStyles   } from "@material-ui/core/styles";
import Footer from '../components/Footer';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const useStyle = makeStyles((theme) => ({
    largeIcon: {
        width: 180,
        height: 180,
        alignContent:'center',
        marginLeft:20,
        marginTop:10
      }, 
}));

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}



export default function PayFailedPage() {
    
    const classes = useStyle();
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
         style={{  backgroundColor:'#DFF3FB'  }}
         >
                    <Grid
                    container
                    spacing={0}
                    style={{ backgroundColor: "#e1f5fe", minHeight: windowDimensions.height }}
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                 >
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={1} sm={1} md={1} ></Grid>
                        <Grid item xs={12} sm={10} md={10}>
                             <Typography  style={{ fontFamily:'sarabun', color: "red",fontSize:28 }}><b>ขออภัยการชำระเบี้ยไม่สำเร็จ</b></Typography>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>  </Grid>
                       
                    </Grid>

                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={1} sm={1} md={1} ></Grid>
                        <Grid item xs={10} sm={10} md={10}>
                              <ErrorOutlineIcon  className={classes.largeIcon}  style={{color:'red'}}></ErrorOutlineIcon>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} ></Grid>

                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={1} sm={1} md={1} ></Grid>
                        <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="" style={{ fontWeight:'' , fontFamily:'sarabun',fontSize:18 }}>โปรดทำรายการชำระเบี้ยอีกครั้ง หากมีข้อสงสัยโปรดติดต่อ 1434</Typography>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} ></Grid>

                    </Grid>

                </Grid >
                
        </Grid>

        <Footer></Footer>
        </div>
    )
}
