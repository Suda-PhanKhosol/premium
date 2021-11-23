import React from 'react'
import { Grid ,Typography} from '@material-ui/core'
import SiamSmileHeader from '../components/SiamSmileHeader'
import { makeStyles   } from "@material-ui/core/styles";
import Footer from '../components/Footer';
import PaySlipList from '../components/PaySlipList';

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


export default function PaySlipPage() {
    
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
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={10} sm={10} md={6} lg={4}>
                                        <PaySlipList></PaySlipList>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1}  lg={1}> </Grid>
                                
                                </Grid>

                </Grid >
                
        </Grid>

            <Footer></Footer>     
        </div>
    )
}
