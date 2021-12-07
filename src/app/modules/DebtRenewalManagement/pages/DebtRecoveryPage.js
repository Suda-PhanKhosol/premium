import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../_common/components/TabPanel/TabPanel'
import DebtRenewalTable from '../components/DebtRenewalWaitingTable';
import { useDispatch } from 'react-redux';
import * as debtRenewalRedux from '../_redux/debtRenewalRedux'
import DebtRenewalCancleTable from '../components/DebtRenewalCancleTable';
import DebtRenewalSuccessTable from '../components/DebtRenewalSuccessTable';
import DebtRenewalAllTable from '../components/DebtRenewalAll';
import { Grid ,Typography ,Paper} from '@material-ui/core';
import DebtRenewalSearch from '../components/DebtRenewalSearch';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function DebtRecoveryPage() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      let obj = {indexTab : newValue , isAdvanceFilter : false} //ตอนกดเปลี่ยน Tab ใหม่ต้องเคลียร์ค่า ค้นหาขั้นสูง ด้วย isAdvanceFilter : false
      dispatch(debtRenewalRedux.actions.updateIndexTab(obj));
    };

    //ทุกครั้งที่ไม่ว่าจะกด Tab ค้างไว้ที่ไหน เวลา Route ไป Path อื่นแล้วกลับมาใหม่ให้เคลียร์ค่ากัน Err ที่จะเกิดขึ้น
    React.useEffect(() => {
        dispatch(debtRenewalRedux.actions.updateIndexTab(0));
    }, [])

    return (
        <div className={classes.root} style={{ marginLeft:20}}>
              <Grid container>
                  <Grid item > <Typography style={{fontSize:20 }}> จัดรายการตั้งหนี้ : คืนความคุ้มครอง</Typography></Grid>
              </Grid>
              <br/>

              <AppBar position="static" style={{backgroundColor:'#2699FB'}} >
                <Tabs 
                 value={value}
                 onChange={handleChange}
                 indicatorColor="primary"
                 textColor="inherit"
                 aria-label="icon label tabs example"
                 style={{color:'#FFFFFF'}}
                >
                  <Tab label="รอรับชำระ"/>
                  <Tab label="รับชำระแล้ว" />
                  <Tab textColorPrimary label="ยกเลิก" />
                  <Tab textColor='secondary'  label="ทั้งหมด" />
                </Tabs>
              </AppBar>

              <Paper elevation={1} square>
                <br/>
                    <Grid container style={{ marginLeft:23}}>
                        <Grid item item xs={12} sm={12} md={12} lg={12} >
                              <DebtRenewalSearch tabIndex = {value}></DebtRenewalSearch>
                        </Grid>
                    </Grid>
                    <TabPanel value={value} index={0}>
                          <DebtRenewalTable  moduleName="DebtRecovery"></DebtRenewalTable>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                          <DebtRenewalSuccessTable  moduleName="DebtRecovery"></DebtRenewalSuccessTable>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                          <DebtRenewalCancleTable  moduleName="DebtRecovery"></DebtRenewalCancleTable>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                          <DebtRenewalAllTable moduleName="DebtRecovery"></DebtRenewalAllTable>
                    </TabPanel>
              </Paper>
      </div>
    )
}
