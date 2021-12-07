import React from 'react'
import {Typography,Grid ,Button ,Tooltip ,Zoom ,IconButton ,Icon ,Dialog ,DialogTitle ,DialogContent ,DialogActions ,Paper}from '@material-ui/core';
import * as debtRenewalRedux from '../_redux/debtRenewalRedux' ;
import { useSelector , useDispatch } from 'react-redux';
import StandardDataTable from "../../_common/components/DataTable/StandardDataTable";

export default function DialogTransactionLog() {

    const [paginated, setPaginated] = React.useState({
        page: 1,
        recordsPerPage: 10,
        orderingField: "",
        ascendingOrder: true,
        searchValues: {
          searchProductGroupName: "",
        },
      });
    
      const [totalRecords, setTotalRecords] = React.useState(0);
      const [data, setData] = React.useState([]);

    const debtRenewalReducer = useSelector(({debtRenewal}) => debtRenewal);
    const dispatch = useDispatch();

    
  const columns = [
    {
      name: "xxx_transactionDate",
      label: "วันที่ทำรายการ",
    },
    {
      name: "xxx_transactionUpdateBy",
      label: "ผู้ทำรายการ",
    },
    {
      name: "xxx_transactionType",
      label: "ประเภทรายการ",
    },
    {
        name: "xxx_fieldEdit",
        label: "ชื่อคอลัมน์",
    },
    {
        name: "xxx_oldData",
        label: "ข้อมูลเดิม",
    },
    {
        name: "xxx_newData",
        label: "ข้อมูลใหม่",
    }
  ];

    
    const handleCloseTransLog = () => {
        let transLogObj = {
            xxx_transactionDate:  "" , 
            xxx_transactionUpdateBy :  "" , 
            xxx_transactionType:  "",
            xxx_flag:false
          };
  
        dispatch(debtRenewalRedux.actions.updateTransactionLogDialog(transLogObj));
    }

    React.useEffect(() => {
        let data = [
            {
                xxx_transactionDate : "20/11/2564",
                xxx_transactionUpdateBy : "06365 สุดา พันธ์โกศล",
                xxx_transactionType : "ชำระเงิน",
                xxx_fieldEdit : "paymentType" ,
                xxx_oldData : "รอรับชำระ",
                xxx_newData : "ยกเลิก"
            },
            {
                xxx_transactionDate : "20/11/2564",
                xxx_transactionUpdateBy : "06365 สุดา พันธ์โกศล",
                xxx_transactionType : "ยกเลิก",
                xxx_fieldEdit : "status" ,
                xxx_oldData : "รอรับชำระ",
                xxx_newData : "ยกเลิก"
            },
            {
                xxx_transactionDate : "20/11/2564",
                xxx_transactionUpdateBy : "06365 สุดา พันธ์โกศล",
                xxx_transactionType : "ชำระเงิน",
                xxx_fieldEdit : "paymentType",
                xxx_oldData : "รอรับชำระ",
                xxx_newData : "ยกเลิก"
            },
            {
                xxx_transactionDate : "20/11/2564",
                xxx_transactionUpdateBy : "06365 สุดา พันธ์โกศล",
                xxx_transactionType : "ยกเลิก",
                xxx_fieldEdit : "status",
                xxx_oldData : "รอรับชำระ",
                xxx_newData : "ยกเลิก"


            },
        ];
        setData(data);
       
    }, [])
    return (
        <div>
                
        <Dialog 
          onClose={handleCloseTransLog} 
          aria-labelledby="customized-dialog-title" 
          open={debtRenewalReducer.isTransactionLogDialog}
          maxWidth='md'>
                <DialogTitle id="customized-dialog-title" onClose={handleCloseTransLog}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Typography variant="h6">ประวัติการทำรายการ</Typography>
                      <Tooltip title="ปิด" placement="bottom" TransitionComponent={Zoom} enterDelay={550} leaveDelay={100}>
                        <IconButton aria-label="close"  onClick={handleCloseTransLog}>
                          <Icon style={{ color: "#FF5A5A" }}>close</Icon>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                </DialogTitle>
                <DialogContent dividers >
                <StandardDataTable
                    name="testTable"
                    title=""
                    columns={columns}
                    data={data}
                    paginated={paginated}
                    setPaginated={setPaginated}
                    totalRecords={totalRecords}
                    headerbgcolor={"#3C8DBC !important"}
                    fullWidth
                ></StandardDataTable>
                </DialogContent>
                <DialogActions>
                  <Button size="small" autoFocus onClick={handleCloseTransLog} color="#FFFFFF" style={{backgroundColor:'grey', color:'#FFFFFF'}}>
                    ปิด
                  </Button>
                </DialogActions>
        </Dialog>

        </div>
    )
}
