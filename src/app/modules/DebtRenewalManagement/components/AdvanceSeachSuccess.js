import React from 'react'
import { useFormik } from 'formik';
import FormikDatePicker from "../../_common/components/CustomFormik/FormikDatePicker";
import { Grid  , Typography} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {makeStyles} from '@material-ui/core/styles' ;


require("dayjs/locale/th");
var utc = require("dayjs/plugin/utc");
var dayjs = require("dayjs");
dayjs.locale("th");
dayjs.extend(utc);

const useStyles = makeStyles((theme) => ({
    marginFilterItem : {
        marginTop:10
    },
    toggleContainer: {
        // margin: theme.spacing(2, 0),
        // height:20
    },
    textLabel : {
        fontSize:13,
        color:'#9E9898'
    },
    textTiltla : {
        fontSize: 12,
        color:'#ACA3A3'
    }
}));

export default function AdvanceSeachSuccess() {

    const [state] = React.useState({
        endDate: dayjs().startOf('day'),
      });

    const classes = useStyles();
    const [products, setProducts] = React.useState(() => []);
    const [plans, setPlans] = React.useState(() => []);


    const handleProducts = (event, newProducts) => {
    //   alert(newFormats.length);

    //   if (newFormats.length) {
        setProducts(newProducts);
    //   }
    //   alert(newProducts);
    };
  
    const handlePlans =  (event, newPlans) => {
        setPlans(newPlans);
    }

    
    const formik = useFormik({
        enableReinitialize: true,
        validate: (values) => {
          const errors = {};

          return errors;
        },
        initialValues: {
            endDate: state.startDate,

        },
        onSubmit: (values) => {
            alert(values.searchPrms);
            alert(values.endDate);
        },
      });
    return (
        <div>
             <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            className={classes.marginFilterItem}
            >
                <Grid item xs={2} sm={2} md={2} lg={2} >
                    <Typography className={classes.textTiltla}>วันที่สิ้นสุดชำระ</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={3} lg={3} >
                        <FormikDatePicker
                                autoOk
                                formik={formik}
                                name="endDate"
                                label= ""
                        />
                </Grid>
            </Grid>
            <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            className={classes.marginFilterItem}
            >
                <Grid item xs={2} sm={2} md={2} lg={2} >
                    <Typography className={classes.textTiltla}>ผลิตภัณฑ์</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={3} lg={3} className={classes.toggleContainer}>
                            <ToggleButtonGroup value={products} onChange={handleProducts}  size="small"  style={{borderBlockColor:'#5191D0'}}>
                                <ToggleButton value="ph"  style={{width:50 }}>
                                        <Typography className={classes.textLabel}> PH</Typography>
                                </ToggleButton>
                                <ToggleButton value="pa" >
                                        <Typography className={classes.textLabel}>PA</Typography>
                                </ToggleButton>
                                <ToggleButton value="mortor" >
                                        <Typography className={classes.textLabel}>Mortor</Typography>
                                </ToggleButton>
                            </ToggleButtonGroup>
                </Grid>
            </Grid>
            <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            className={classes.marginFilterItem}
            >
                <Grid item xs={2} sm={2} md={2} lg={2} >
                    <Typography className={classes.textTiltla}>แผน</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={3} lg={3} >
                            <ToggleButtonGroup value={plans} onChange={handlePlans}  size="small"  style={{borderBlockColor:'#5191D0'}}>
                                <ToggleButton value="phPlus"  style={{width:50 }}>
                                        <Typography className={classes.textLabel}>631+</Typography>
                                </ToggleButton>
                                <ToggleButton value="phNormal" >
                                        <Typography className={classes.textLabel}>631</Typography>
                                </ToggleButton>
                                <ToggleButton value="phGold" >
                                        <Typography className={classes.textLabel}>501</Typography>
                                </ToggleButton>
                                <ToggleButton value="pa" >
                                        <Typography className={classes.textLabel}>501</Typography>
                                </ToggleButton>
                            </ToggleButtonGroup>
                </Grid>
            </Grid>
        </div>
    )
}
