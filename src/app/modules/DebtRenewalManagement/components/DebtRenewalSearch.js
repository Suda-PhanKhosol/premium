import React from 'react';
import FormikTextField from '../../_common/components/CustomFormik/FormikTextField';
import { Grid ,TextField , Button , Typography} from '@material-ui/core';
import { useFormik } from 'formik';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import FilterIcon from '@material-ui/icons/FilterList';
import InputAdornment from '@material-ui/core/InputAdornment';
import {makeStyles} from '@material-ui/core/styles' ;
import AdvanceSeachWaiting from './AdvanceSeachWaiting';
import AdvanceSeachSuccess from './AdvanceSeachSuccess';
import AdvanceSeachCancle from './AdvanceSeachCancle';
import AdvanceSeachAll from './AdvanceSeachAll';
import { useDispatch, useSelector } from "react-redux";
import * as debtRenewalRedux from '../_redux/debtRenewalRedux'



export default function DebtRenewalSearch(props) {

    const debtRenewalReducer = useSelector(({debtRenewal}) => debtRenewal);
    const dispatch = useDispatch();
    const [isAdvanceFilter, setIsAdvanceFilter] = React.useState(false)

    const formik = useFormik({
        enableReinitialize: true,
        validate: (values) => {
          const errors = {};

          return errors;
        },
        initialValues: {
            searchPrms: "",

        },
        onSubmit: (values) => {
            alert(values.searchPrms);
        },
      });

      const handleUpdateSearch = (values) => {
          alert(JSON.stringify(values))
          if(values.componentName === "waiting"){
                let newPaginated = {
                //   ...paginated,
                  page:1,
                  searchValues: {
                    fullName: values.fullName,
                    identityCard: values.identityCard,
                    primaryPhone: values.primaryPhone,
                  },
                };
                // setPaginated(newPaginated);
          }
       
      };

    return (
        <form onSubmit={formik.handleSubmit}>
           <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            >
                <Grid item xs={6} sm={6} md={6} lg={5} >
                    <FormikTextField
                        formik={formik}
                        label="ค้นหา"
                        name="searchPrms"
                        variant="standard"
                    />
                      {/* <TextField
                        id="input-with-icon-textfield"
                        label="ระบุการค้นหา"
                        name="searchPrms"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <SearchOutlined />
                            </InputAdornment>
                        ),
                        }}
                        fullWidth
                    /> */}
                </Grid>
                <Grid item xs={3} sm={2} md={1} lg={1} >
                     <Button
                        startIcon={<SearchOutlined />}
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{ color: "#FFFFFF" ,backgroundColor:'#55A5F6'}}
                        >
                        ค้นหา
                    </Button>
                </Grid>
                <Grid item xs={3} sm={3} md={2} lg={2} >
                    <Button
                        startIcon={<FilterIcon />}
                        style={{ color: "#C6C6C6" ,backgroundColor:''}}
                        onClick={ () => 
                            {
                                let obj = {indexTab : props.tabIndex , isAdvanceFilter : !debtRenewalReducer.isAdvanceFilter}  //ตอนกดต้องโชว์ค่า ค้นหาขั้นสูง isAdvanceFilter : true
                                dispatch(debtRenewalRedux.actions.updateIndexTab(obj));
                            }
                        }
                        >
                        ค้นหาขั้นสูง
                    </Button>
                </Grid>
            </Grid>
           
           {
               (debtRenewalReducer.indexTab === 0 && debtRenewalReducer.isAdvanceFilter ) &&  <AdvanceSeachWaiting componentName="" updateSearch={handleUpdateSearch.bind(this)} ></AdvanceSeachWaiting>
           }
           {
                (debtRenewalReducer.indexTab  ===1   && debtRenewalReducer.isAdvanceFilter) &&   <AdvanceSeachSuccess></AdvanceSeachSuccess>
           }
           {
                (debtRenewalReducer.indexTab  ===2  && debtRenewalReducer.isAdvanceFilter ) &&        <AdvanceSeachCancle></AdvanceSeachCancle>
           }
           {
               (debtRenewalReducer.indexTab  ===3  && debtRenewalReducer.isAdvanceFilter  )&&    <AdvanceSeachAll></AdvanceSeachAll>
           }
        </form>
    )
}
