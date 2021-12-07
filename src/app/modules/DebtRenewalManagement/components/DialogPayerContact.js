import React from 'react'
import {Typography,Grid ,Button ,Tooltip ,Zoom ,IconButton ,Icon ,Dialog ,DialogTitle ,DialogContent ,DialogActions ,Paper}from '@material-ui/core';
import * as debtRenewalRedux from '../_redux/debtRenewalRedux' ;
import { useSelector , useDispatch } from 'react-redux';


export default function DialogPayerContact() {

  const debtRenewalReducer = useSelector(({debtRenewal}) => debtRenewal);
  const dispatch = useDispatch();
  
  const handleCloseStorage = () => {
    let cantactDataObj = {
        name: "", 
        phonNumber : "", 
        branchCompanyName:  "",
        address :  "",
        flag:false
      };

      dispatch(debtRenewalRedux.actions.updatePayerContactDialog(cantactDataObj));
  }

    return (
        <div>
                
        <Dialog 
          onClose={handleCloseStorage} 
          aria-labelledby="customized-dialog-title" 
          open={debtRenewalReducer.isPayerContactDialog}
          fullWidth>
                <DialogTitle id="customized-dialog-title" onClose={handleCloseStorage}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Typography variant="h6">ข้อมูลการติดต่อ (ผู้ชำระเบี้ย)</Typography>
                      <Tooltip title="ปิด" placement="bottom" TransitionComponent={Zoom} enterDelay={550} leaveDelay={100}>
                        <IconButton aria-label="close" onClick={handleCloseStorage}>
                          <Icon style={{ color: "#FF5A5A" }}>close</Icon>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                </DialogTitle>
                <DialogContent dividers >
                  <Grid container >
                      <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Paper variant="outlined" square style={{backgroundColor:'#DCF1F8' ,height:35}} >
                                <Typography style={{marginLeft:10 , fontSize:14}}>ชื่อ - นามสกุล</Typography>
                            </Paper>
                      </Grid>
                      <Grid item xs={12} sm={8} md={8} lg={8} >
                            <Paper variant="outlined" square style={{borderColor:'#DCF1F8'  ,height:35 ,textAlign:''}} >
                                <Typography  style={{marginLeft:10 , fontSize:14}}>{debtRenewalReducer.payerContact.name}</Typography>
                            </Paper>
                      </Grid>
                  </Grid>
                  <Grid container >
                      <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Paper variant="outlined" square style={{backgroundColor:'#DCF1F8' ,height:35}} >
                                <Typography style={{marginLeft:10 , fontSize:14}}>เบอร์โทรติดต่อ</Typography>
                            </Paper>
                      </Grid>
                      <Grid item xs={12} sm={8} md={8} lg={8} >
                            <Paper variant="outlined" square style={{borderColor:'#DCF1F8'  ,height:35 ,textAlign:''}} >
                                <Typography  style={{marginLeft:10 , fontSize:14}}>{debtRenewalReducer.payerContact.phonNumber}</Typography>
                            </Paper>
                      </Grid>
                  </Grid>
                  <Grid container >
                      <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Paper variant="outlined" square style={{backgroundColor:'#DCF1F8' ,height:35}} >
                                <Typography style={{marginLeft:10 , fontSize:14}}>ที่อยู่ที่ทำงาน</Typography>
                            </Paper>
                      </Grid>
                      <Grid item xs={12} sm={8} md={8} lg={8} >
                            <Paper variant="outlined" square style={{borderColor:'#DCF1F8'  ,height:35 ,textAlign:''}} >
                                <Typography  style={{marginLeft:10 , fontSize:14}}>{debtRenewalReducer.payerContact.branchCompanyName}</Typography>
                            </Paper>
                      </Grid>
                  </Grid>
                  <Grid container >
                      <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Paper variant="outlined" square style={{backgroundColor:'#DCF1F8' ,height:35}} >
                                <Typography style={{marginLeft:10}}></Typography>
                            </Paper>
                      </Grid>
                      <Grid item xs={12} sm={8} md={8} lg={8} >
                            <Paper variant="outlined" square style={{borderColor:'#DCF1F8'  ,height:35 ,textAlign:''}} >
                                <Typography  style={{marginLeft:10 , fontSize:14}}>{debtRenewalReducer.payerContact.address}</Typography>
                            </Paper>
                      </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button size="small" autoFocus onClick={handleCloseStorage} color="#FFFFFF" style={{backgroundColor:'grey', color:'#FFFFFF'}}>
                    ปิด
                  </Button>
                </DialogActions>
        </Dialog>

        </div>
    )
}
