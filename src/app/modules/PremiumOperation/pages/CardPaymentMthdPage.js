import React from 'react'
import KTCOnlinePayment from '../components/KTCOnlinePayment'
import { Grid,Paper,Typography ,Button} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

const useStyle = makeStyles((theme) => ({
    image: {
        width: 90,
        height: 110,
    },
    imageFotter: {
        width: 30,
        height: 30,
        marginRight: 8,
        marginTop: 2,
        marginBottom: 8
    },
    imageFotter2: {
        width: 30,
        height: 30,
        marginTop: 0,
        marginBottom: 8
    },
}));
export default function CardPaymentMthdPage() {
    	//set Dimensions
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


	const classes = useStyle();
    return (
        <div>
			<KTCOnlinePayment></KTCOnlinePayment>
            
           
        </div>
    )
}
