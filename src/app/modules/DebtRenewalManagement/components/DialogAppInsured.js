import React from 'react'
import {Typography,Grid ,Button ,Tooltip ,Zoom ,IconButton ,Icon ,Dialog ,DialogTitle ,DialogContent ,DialogActions ,Paper}from '@material-ui/core';
import * as debtRenewalRedux from '../_redux/debtRenewalRedux' ;
import { useSelector , useDispatch } from 'react-redux';

export default function DialogAppInsured() {
    const debtRenewalReducer = useSelector(({debtRenewal}) => debtRenewal);
    const dispatch = useDispatch();
    
    const handleCloseApp = () => {
        let appObj = {
            appNo:  "" , 
            insuredName : "" , 
            payerBranch : "" ,
            dealer:  "",
            flag:false
          };
           dispatch(debtRenewalRedux.actions.updateAppInsuredInfo(appObj));
    }
    return (
        <div>
                
                <Dialog 
                onClose={handleCloseApp} 
                aria-labelledby="customized-dialog-title" 
                open={debtRenewalReducer.isappInsuredInfoDialog}
                fullWidth>
                        <DialogTitle id="customized-dialog-title" onClose={handleCloseApp}>
                            <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            >
                            <Typography variant="h6">ข้อมูล</Typography>
                            <Tooltip title="ปิด" placement="bottom" TransitionComponent={Zoom} enterDelay={550} leaveDelay={100}>
                                <IconButton aria-label="close" onClick={handleCloseApp}>
                                <Icon style={{ color: "#FF5A5A" }}>close</Icon>
                                </IconButton>
                            </Tooltip>
                            </Grid>
                        </DialogTitle>
                        <DialogContent dividers >
                        <Grid container >
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Paper variant="outlined" square style={{backgroundColor:'#DCF1F8' ,height:35}} >
                                        <Typography style={{marginLeft:10 , fontSize:14}}>เลขที่แอพ</Typography>
                                    </Paper>
                            </Grid>
                            <Grid item xs={12} sm={8} md={8} lg={8} >
                                    <Paper variant="outlined" square style={{borderColor:'#DCF1F8'  ,height:35 ,textAlign:''}} >
                                        <Typography  style={{marginLeft:10 , fontSize:14}}>{debtRenewalReducer.appInsuredInfo.appNo}</Typography>
                                    </Paper>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Paper variant="outlined" square style={{backgroundColor:'#DCF1F8' ,height:35}} >
                                        <Typography style={{marginLeft:10 , fontSize:14}}>ชื่อ - นามสกุล ผู้เอาประกัน</Typography>
                                    </Paper>
                            </Grid>
                            <Grid item xs={12} sm={8} md={8} lg={8} >
                                    <Paper variant="outlined" square style={{borderColor:'#DCF1F8'  ,height:35 ,textAlign:''}} >
                                        <Typography  style={{marginLeft:10 , fontSize:14}}>{debtRenewalReducer.appInsuredInfo.insuredName}</Typography>
                                    </Paper>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Paper variant="outlined" square style={{backgroundColor:'#DCF1F8' ,height:35}} >
                                        <Typography style={{marginLeft:10 , fontSize:14}}>สาขาผู้ชำระเบี้ย</Typography>
                                    </Paper>
                            </Grid>
                            <Grid item xs={12} sm={8} md={8} lg={8} >
                                    <Paper variant="outlined" square style={{borderColor:'#DCF1F8'  ,height:35 ,textAlign:''}} >
                                        <Typography  style={{marginLeft:10 , fontSize:14}}>{debtRenewalReducer.appInsuredInfo.payerBranch}</Typography>
                                    </Paper>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Paper variant="outlined" square style={{backgroundColor:'#DCF1F8' ,height:35}} >
                                        <Typography style={{marginLeft:10 , fontSize:14}}>ผู้แทน</Typography>
                                    </Paper>
                            </Grid>
                            <Grid item xs={12} sm={8} md={8} lg={8} >
                                    <Paper variant="outlined" square style={{borderColor:'#DCF1F8'  ,height:35 ,textAlign:''}} >
                                        <Typography  style={{marginLeft:10 , fontSize:14}}>{debtRenewalReducer.appInsuredInfo.dealer}</Typography>
                                    </Paper>
                            </Grid>
                        </Grid>
                        </DialogContent>
                        <DialogActions>
                        <Button size="small" autoFocus onClick={handleCloseApp} color="#FFFFFF" style={{backgroundColor:'grey', color:'#FFFFFF'}}>
                            ปิด
                        </Button>
                        </DialogActions>
                </Dialog>
        </div>
    )
}
