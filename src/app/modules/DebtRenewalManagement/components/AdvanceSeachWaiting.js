import React from 'react'
import { useFormik } from 'formik';
import FormikDatePicker from "../../_common/components/CustomFormik/FormikDatePicker";
import FormikDropdownMultiple from "../../_common/components/CustomFormik/FormikDropdownMultiple";
import { Grid  , Typography} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {makeStyles} from '@material-ui/core/styles' ;
import {useSelector} from 'react-redux'




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

export default function AdvanceSeachWaiting(props) {

  
    const debtRenewalReducer = useSelector(({debtRenewal}) => (debtRenewal))

    const [productNameChip, setProductNameChip] = React.useState([]);
    const [planNameChip, setPlanNameChip] = React.useState([]);
    const [statusNameChip, setStatusNameChip] = React.useState([]);


    
    const [state] = React.useState({
        endDate: dayjs().startOf('day'),
      });

    const classes = useStyles();
   
  
    const [products, setProducts] = React.useState(() => []);
    const [plans, setPlans] = React.useState(() => []);
    const [status, setStatus] = React.useState(() => [])


    const handleProducts = (event, newProducts) => {
        setProducts(newProducts);
    };
  
    const handlePlans =  (event, newPlans) => {
        setPlans(newPlans);
    }

    const handleStatuses =  (event, newStatuses) => {
        setStatus(newStatuses);
    }

    const formik = useFormik({
        enableReinitialize: true,
        validate: (values) => {
          const errors = {};

          let obj = {values : values , componentName : "waiting"}
          props.updateSearch(obj);

          return errors;
        },
        initialValues: {
            endDate: state.startDate,
            product: "",
            plan: "",
            status: "",
        },
        onSubmit: (values) => {
         
        },
        
      });

      React.useEffect(() => {
        if(formik.values.product === ""){
            setProductNameChip([]);
        }
        else{

            var data = [];
             formik.values.product.forEach(element => {
                data.push(element.name);
             });
             setProductNameChip(data); 
             
        }
     
      }, [formik.values.product])

      React.useEffect(() => {
        if(formik.values.plan === ""){
            setPlanNameChip([]);
        }
        else{

            var data = [];
             formik.values.plan.forEach(element => {
                data.push(element.name);
             });
             setPlanNameChip(data); 
             
        }
     
      }, [formik.values.plan])

      React.useEffect(() => {
        if(formik.values.status === ""){
            setStatusNameChip([]);
        }
        else{

            var data = [];
             formik.values.status.forEach(element => {
                data.push(element.name);
             });
             setStatusNameChip(data);
             
        }
     
      }, [formik.values.status])

    
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
                <Grid item xs={4} sm={4} md={5} lg={5} className={classes.toggleContainer}>
                            {/* <ToggleButtonGroup value={products} onChange={handleProducts}  size="small"  style={{borderBlockColor:'#5191D0'}}>
                                <ToggleButton value="ph"  style={{width:50 }}>
                                        <Typography  className={classes.textLabel}>PH</Typography>
                                </ToggleButton>
                                <ToggleButton value="pa" >
                                        <Typography  className={classes.textLabel}>PA</Typography>
                                </ToggleButton>
                                <ToggleButton value="mortor" >
                                        <Typography  className={classes.textLabel}>Mortor</Typography>
                                </ToggleButton>
                            </ToggleButtonGroup> */}
                               <FormikDropdownMultiple
                                formik={formik}
                                data={debtRenewalReducer.products} 
                                name="product" 
                                itemSelected={productNameChip}
                                label="เลือกผลิตภัณฑ์"
                            />{JSON.stringify(formik.values.product)}
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
                <Grid item xs={4} sm={4} md={5} lg={5} >
                            {/* <ToggleButtonGroup value={plans} onChange={handlePlans}  size="small"  style={{borderBlockColor:'#5191D0'}}>
                                <ToggleButton value="phPlus"  style={{width:50 }}>
                                        <Typography  className={classes.textLabel}>631+</Typography>
                                </ToggleButton>
                                <ToggleButton value="phNormal" >
                                        <Typography  className={classes.textLabel}>631</Typography>
                                </ToggleButton>
                                <ToggleButton value="phGold" >
                                        <Typography  className={classes.textLabel}>501</Typography>
                                </ToggleButton>
                                <ToggleButton value="pa" >
                                        <Typography  className={classes.textLabel}>501</Typography>
                                </ToggleButton>
                            </ToggleButtonGroup> */}
                             <FormikDropdownMultiple
                                formik={formik}
                                data={debtRenewalReducer.plans} 
                                name="plan" 
                                itemSelected={planNameChip}
                                label="เลือกแผน"
                            />{JSON.stringify(formik.values.plan)}
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
                    <Typography className={classes.textTiltla}>สถานะ</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={5} lg={5} >
                            {/* <ToggleButtonGroup  value={status} onChange={handleStatuses}  size="small"  style={{borderBlockColor:'#5191D0'}}>
                                <ToggleButton value="waiting"  style={{width:150 }}>
                                        <Typography  className={classes.textLabel}>รอรับชำระ</Typography>
                                </ToggleButton>
                                <ToggleButton value="waitingPaymentMethod" style={{width:150 }}>
                                        <Typography  className={classes.textLabel}>รอวิธีรับชำระ</Typography>
                                </ToggleButton>
                                <ToggleButton value="success" style={{width:150 }}>
                                        <Typography  className={classes.textLabel}>ชำระแล้ว</Typography>
                                </ToggleButton>
                                <ToggleButton value="cancle" >
                                        <Typography className={classes.textLabel}>ยกเลิก</Typography>
                                </ToggleButton>
                            </ToggleButtonGroup> */}
                            <FormikDropdownMultiple
                                formik={formik}
                                data={debtRenewalReducer.statuses} 
                                name="status" 
                                itemSelected={statusNameChip}
                                label="เลือกสถานะ"
                            />{JSON.stringify(formik.values.status)}
                </Grid>
            </Grid>

        </div>
    )
}
