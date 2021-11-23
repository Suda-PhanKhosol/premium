import React from 'react'
import { Grid,Paper,Typography ,Button , FormControlLabel ,Radio} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import FormikTextField from '../../_common/components/CustomFormik/FormikTextField';
import { useFormik } from 'formik'
import FormikDropdown from "../../_common/components/CustomFormik/FormikDropdown";



const useStyle = makeStyles((theme) => ({
    imgHeader: {
        width: 80,
        height: 50,
        marginRight: 0,
        marginTop: 2,
        marginLeft:50
    },
    imgCard: {
        width: 70,
        height: 40,
        marginRight: 0,
        marginTop: 10,
        marginLeft:0
    },
    imgCCV: {
      width: 60,
      height: 40,
      marginRight: 0,
      marginTop: 10,
      marginLeft:0
  },
    TextStyle : {
        fontWeight:'',
        fontFamily:'sarabun',
        fontSize:12
    },
}));

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function KTCOnlinePayment() {
    const classes = useStyle();
    const [state] = React.useState({
      isStatusSlected: [
        { id: 0, name: "ทั้งหมด" },
        { id: 1, name: "รอดำเนินการ" },
        { id: 2, name: "ดำเนินการแล้ว" },
      ],
     statusId: 0,

    });

    const [windowDimensions, setWindowDimensions] = React.useState(
		getWindowDimensions()
	);
    
  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};
 
      return errors;
    },
    initialValues: {
          fullName: "",
          phone: "",
          status : state.statusId 

    },
    onSubmit: (values) => {
     
    },
  });

	React.useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);


    return (
        <div >
                <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Grid elevation={0} style={{backgroundColor: "#B53434" }}>
                                <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                >
                                     <Grid item >
                                         <img
                                        className={classes.imgHeader}
                                        alt=""
                                        src={process.env.PUBLIC_URL + "/logo-ktc-white.png"}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                       <Typography variant="subtitle1" style={{color:'white' ,fontSize:14}}>KTC ONLINE PAYMENT</Typography>
                                    </Grid>
                                </Grid>
                      </Grid>
                </Grid>
              
              

                 
             <Grid 
             	style={{
                    height: windowDimensions.height,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    marginTop:0,
                }}
             container 
             direction="row" 
             justifyContent="space-between" 
             alignItems="center" 
             className={classes.TextStyle}
             >
                 <Grid container   >
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:0}}
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            
                                    <Grid item xs={10} sm={6} md={6} lg={6}>
                                        <img
                                        className={classes.imgCard}
                                        alt=""
                                        src={process.env.PUBLIC_URL + "/visa-master.png"}
                                        />
                                           <img
                                        className={classes.imgCard}
                                        alt=""
                                        src={process.env.PUBLIC_URL + "/jcb.png"}
                                        />
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >ชื่อร้านค้า : </Typography>
                                    </Grid>
                                    <Grid item xs={5} sm={3} md={4} lg={4}>
                                       <Typography    className={classes.TextStyle} >Siamsmile Broker (Thailand) Co.,Ltd. </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >ที่ตั้งร้านค้า : </Typography>
                                    </Grid>
                                    <Grid item xs={5} sm={3} md={4} lg={4}>
                                       <Typography    className={classes.TextStyle} >Thailand</Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >ราคารวม : </Typography>
                                    </Grid>
                                    <Grid item xs={5} sm={3} md={4} lg={4}>
                                       <Typography    className={classes.TextStyle} >THB 1040</Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >หมายเลขบัตร : </Typography>
                                    </Grid>
                                    <Grid item xs={5} sm={3} md={4} lg={4}>
                                             <FormikTextField
                                                formik={formik}
                                                name="fullName"
                                                id="outlined-textarea"
                                                label="หมายเลขบัตร"
                                                placeholder="กรอกหมายเลขบัตร"
                                                multiline
                                                variant="outlined"
                                                />
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >วันหมดอายุบัตร (เดือน/ปี) : </Typography>
                                    </Grid>
                                    <Grid item xs={5} sm={3} md={4} lg={4}>
                                             <FormikTextField
                                                formik={formik}
                                                name=""
                                                id="outlined-textarea"
                                                label="หมายเลขบัตร"
                                                placeholder=""
                                                multiline
                                                variant="outlined"
                                                />
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >CVV รหัส 3 ตัวสุดท้ายหลังบัตร : </Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={2} md={3} lg={2}>
                                              <FormikTextField
                                                formik={formik}
                                                name=""
                                                id="outlined-textarea"
                                                label="CCV"
                                                placeholder=""
                                                multiline
                                                variant="outlined"
                                                style={{width:10}}
                                                />
                                    </Grid>
                                    <Grid item xs={2} sm={1} md={1} lg={2}>
                                              <img
                                                className={classes.imgCCV}
                                                alt=""
                                                src={process.env.PUBLIC_URL + "/cvc.png"}
                                                />
                                    </Grid>

                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={3} lg={1}> </Grid>
                                    <Grid item xs={5} sm={3} md={3} lg={3}>
                                       <Typography    className={classes.TextStyle} >(หมายเลข 3 หลักสุดท้ายที่ปรากฎบนแถบลายเซนต์ด้านหลังบัตร) </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >เลขอ้างอิงร้านค้า : </Typography>
                                       <Typography    className={classes.TextStyle} >(Merchant Ref. No.) </Typography>
                                    </Grid>
                                    <Grid item xs={5} sm={3} md={4} lg={4}>
                                       <Typography    className={classes.TextStyle} >GC-2230152</Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >IP ธุรกรรม : </Typography>
                                    </Grid>
                                    <Grid item xs={5} sm={3} md={4} lg={4}>
                                       <Typography    className={classes.TextStyle} >184.22.100.15</Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >ประเทศของธนาคารผู้ออกบัตร : </Typography>
                                    </Grid>
                                    <Grid item xs={5} sm={3} md={4} lg={4}>
                                        <FormikDropdown
                                          formik={formik}
                                          disableFirstItem
                                          name="status"
                                          label=""
                                          data={state.isStatusSlected}
                                          firstItemText=""
                                          variant="standard"
                                          disabled={false}
                                          />
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >ชื่อธนาคารผู้ออกบัตร : </Typography>

                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}>
                                       <FormControlLabel value="female" control={<Radio />} label="" />

                                    </Grid>
                                    <Grid item xs={4} sm={2} md={3} lg={3}>
                                        <FormikDropdown
                                          formik={formik}
                                          disableFirstItem
                                          name="status"
                                          label=""
                                          data={state.isStatusSlected}
                                          firstItemText=""
                                          variant="standard"
                                          disabled={false}
                                          />
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >ธนาคารอื่น ๆ : </Typography>

                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}>
                                       <FormControlLabel value="female" control={<Radio />} label="" />

                                    </Grid>
                                    <Grid item xs={4} sm={2} md={3} lg={3}>
                                              <FormikTextField
                                                formik={formik}
                                                name=""
                                                id="outlined-textarea"
                                                label="ชื่อธนาคาร"
                                                placeholder=""
                                                multiline
                                                variant="outlined"
                                                style={{width:10}}
                                                />
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop:15}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={5} sm={3} md={2} lg={2}>
                                       <Typography    className={classes.TextStyle} >อีเมล : </Typography>

                                    </Grid>
                                    <Grid item xs={3} sm={3} md={4} lg={4}>
                                              <FormikTextField
                                                formik={formik}
                                                name=""
                                                id="outlined-textarea"
                                                label="อีเมล"
                                                placeholder=""
                                                multiline
                                                variant="outlined"
                                                style={{width:10}}
                                                />
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>





                            {/* BUTTON */}
                            <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                            
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={4} sm={2} md={2} lg={2}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                style={{ color: "#FFFFFF", backgroundColor: "#2882DC", marginTop: 15 }}
                                                variant="contained"
                                                size="small"
                                            >
                                                ยืนยัน
                                            </Button>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={4} sm={2} md={2} lg={2}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                style={{ color: "#FFFFFF", backgroundColor: "#B53434", marginTop: 15 }}
                                                variant="contained"
                                                size="small"
                                            >
                                                ยกเลิก
                                            </Button>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>

                            </Grid>


                              {/* REMARK */}
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="flex-start"
                              style={{marginTop:15 , marginBottom:20}}
                              
                            >
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                    <Grid item xs={2} sm={1} md={1} lg={1}>
                                         <Typography    style={{ fontWeight:'bold',fontFamily:'sarabun', fontSize:12}} >หมายเหตุ</Typography>
                                    </Grid>
                                    <Grid item xs={8} sm={5} md={5} lg={5}>
                                         <Typography    className={classes.TextStyle} >ธนาคารผู้ออกบัตรบางแห่งยังไม่พร้อม ให้บริการการทำรายการทางอินเทอร์เน็ต โปรดติดต่อธนาคารผู้ออกบัตรหากเกิดปัญหาในการใช้งาน</Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                            </Grid>
                </Grid>
                
                <Grid container item justifyContent="center" alignItems="flex-end">
                </Grid>
            </Grid>
        </div>
    )
}
