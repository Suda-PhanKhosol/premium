import React from 'react'
import {Link,Typography,Grid }from '@material-ui/core';
import * as debtRenewalRedux from '../_redux/debtRenewalRedux' ;
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import ExpanedDataTable from  "../../_common/components/DataTable/ExpanedDataTable";
import DialogPayerContact from './DialogPayerContact';


var flatten = require("flat");
require("dayjs/locale/th");
var dayjs = require("dayjs");
dayjs.locale("th");

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(2),
      height: "auto",
    },
  }));

export default function DebtRenewalAllTable(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const debtRenewalReducer = useSelector(({debtRenewal}) => debtRenewal);

    const [open, setOpen] = React.useState(false)
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
    const [loading, setLoading] = React.useState(false);

  const [openStorageDialog, setOpenStorageDialog] = React.useState(false);
  const [contactData, setContactData] = React.useState({});



    const handleCloseStorage = () => {
      setOpenStorageDialog(false);
    }

    const columns = [
        {
            name: "Bill No."
        },
        {
            name: "ผู้ชำระเบี้ย",
            options: {
              customBodyRenderLite: (dataIndex, rowIndex) => {
                return (
                  <Grid>
                        <Grid style={{ color:'#2699FB'}}>
                                  <Typography >
                                                  <Link 
                                                  href="#" 
                                                  style={{color:'#55A5F6'}}
                                                  onClick={() => {
                                                    console.log('show payer info');
                                                      if(props.moduleName === "DebtStorage" || props.moduleName === "DebtRecovery"){
                                                            let contactDataObj = {
                                                              name: data[dataIndex][1], 
                                                              phonNumber :data[dataIndex][13] , 
                                                              branchCompanyName: data[dataIndex][11],
                                                              address :data[dataIndex][12],
                                                              flag:true
                                                            };
                                                            dispatch(debtRenewalRedux.actions.updatePayerContactDialog(contactDataObj));
                                                       }
                                                  }}
                                                  > {data[dataIndex][1]}</Link>
                                  </Typography>
                       
                        </Grid>
                  </Grid>
                );
              }
            }
        },
        {
          name: props.moduleName === "DebtRenewal" || props.moduleName === "DebtStorage" ? "รายการ" : "จำนวนงวด" //ถ้าเป็นการคืนความคุ้มครอง

        },
        {
            name: "เบี้ย"
        },
        {
            name: "ประเภทการชำระ"
        },
        {
            name: "วิธีการชำระ"
        },
        {
            name: "วันที่สิ้นสุดการชำระ"
        },
        {
            name: "วันที่ชำระ"
        },
        {
            name: "สถานะ",
            options: {
              customBodyRenderLite: (dataIndex, rowIndex) => {
                return (
                  <Grid>

                    {
                      data[dataIndex][8] === "รอรับชำระ" ? (
                        <Grid style={{ color:'#2699FB'}}>
                        {data[dataIndex][8]}
                        </Grid>
                      ) 
                      : 
                      (
                        <Grid style={{ color: data[dataIndex][8] === "รอวิธีรับชำระ" || data[dataIndex][8] === "ยกเลิก" ? '#F61717' : '#18B920'}}>
                        {data[dataIndex][8]}
                        
                        </Grid>
                      )
                    }
                  </Grid>
                );
              }
            }
        },
        {
            name: ""
        },
        {
            name: "IGGROUPS",
            options: {
              display: false,
            }
        }
    ];

    
  function createData(
    no, groupNo, refNo, product,insuredName,insuredPhonenumber,branchCompanyName,workAddress, plan,detail,typePlan,paid,receiptNo,appNo,status,
    transactionDate,transactionUpdateBy,transactionType,
    dealerEmpCode,dealerName,dealerPhoneNumber,
    payerBranch
    ) {
      return { 
        no, groupNo, refNo, product,insuredName, insuredPhonenumber,branchCompanyName,workAddress,plan,detail,typePlan,paid,receiptNo,appNo,status ,
        transactionDate,transactionUpdateBy,transactionType ,
        dealerEmpCode,dealerName,dealerPhoneNumber,
        payerBranch
      };
  }

    function handleGenerateBill() {
        let ret = 0;
        // if(premiumNoticeReducer.premiumBill === ""){
            let yeardata = dayjs().format('BB');
            let monthdata = dayjs().month();
            let runningBill = "000001";
            ret = "B" + yeardata + monthdata + runningBill;    
            // dispatch(premiumRedux.actions.generateBill(ret));     
        // }else{
        //     ret = premiumNoticeReducer.premiumBill;
        // }
        return ret
    } 

    function handleGenerateBillGroup() {
        let ret = 0;
        // if(premiumNoticeReducer.premiumBillGroup === ""){
            let yeardata = dayjs().format('BB');
            let monthdata = dayjs().month();
            let runningBill = "000001";
            ret = "IG" + yeardata + monthdata + runningBill;    
            // dispatch(premiumRedux.actions.generateBillGroup(ret));     
        // }else{
        //     ret = premiumNoticeReducer.premiumBillGroup;
        // }
        return ret
    } 

    
    function handleProductName(e) {
        switch (e) {
          case 1:
            return 'PH';
          case 2:
            return 'PA 30';
          case 3:
            return 'LIFE';
          case 4:
            return 'HOME';
          case 5:
            return 'ETC- SMILE PA';
          case 6:
            return 'ETC- GOLF';
          case 7:
            return 'ETC- HOME';
          case 8:
            return 'ETC- TA';
   
          default:
            break;
        }
      }


      function handlePlanName(e) {
        switch (e) {
          case 1:
            return '635';
          case 2:
            return '631';
          case 3:
            return '631 +';
          default:
            break;
        }
      }

      function handleTitleName(e) {
        switch (e) {
          case 1:
            return 'นาย ';
          case 2:
            return 'นาง ';
          case 3:
            return 'นางสาว ';
          default:
            break;
        }
      }
    
    React.useEffect(() => {

        // if(premiumNoticeReducer.user_plan.length !== 0){

       var testData = [];
       if(props.moduleName === "DebtRenewal" || props.moduleName === "DebtStorage"){
              testData = [
                {
                    xxx_identitycard:"1499900286451",
                    xxx_title:3,
                    xxx_firstname:"A",
                    xxx_lastname:"AA",
                    xxx_phonenumber:"0616652250",
                    xxx_payerBranch : "เชียงราย",
                    xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                    xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                    xxx_premiumPrice:1040,
                    xxx_paymentType:"รับชำระหน้างาน",
                    xxx_paymentMethod : "Bill Payment",
                    xxx_statusDebtPaid : "ยกเลิก",
                    xxx_reasonRemark: "เกินกำหนดรับชำระ",
                    xxx_transactionDate : "20/11/2564",
                    xxx_updateBy : "06365 สุดา พันธ์โกศล",
                    xxx_transaction_Type : "test",
                    xxx_dealerEmpCode : "06366",
                    xxx_dealerName : "เสาวนีย์ สนนอก",
                    xxx_dealerPhoneNumber : "0982752574",
                    xxx_SLAbalance : 0,
                    xxx_lastDatePayment:"11/11/2564",
                    xxx_paidDate:"",
                    xxx_productListDetail :[
                        {
                            xxx_product_Id:1,
                            xxx_product:"ประกันสุขภาพ",
                            xxx_plan_Id: 1 ,
                            xxx_paidtype:1,
                            xxx_paidTypeName:"รายปี",
                            xxx_premiumprice:490,
                            xxx_insureddetail: "a aa",
                            xxx_insuredPhonenumber :"0616652250",
                            xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                            xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                            xxx_plan_bill_number:handleGenerateBill(),
                            xxx_plan_group_number:handleGenerateBillGroup(),
                            xxx_plan_invoice_number:"IN641000000101",
                            xxx_billPaymentNo : "RC641000054501",
                            xxx_appNo : "9456433",
                            xxx_debtNo : ""
                        }
                    ]
                },
                {
                    xxx_identitycard:"1456966322522",
                    xxx_title:3,
                    xxx_firstname:"อารี",
                    xxx_lastname:"มีนา",
                    xxx_phonenumber:"0616523663",
                    xxx_payerBranch : "เชียงราย",
                    xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                    xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                    xxx_premiumPrice:2000,
                    xxx_paymentType:"รับชำระหน้างาน",
                    xxx_paymentMethod : "Bill Payment",
                    xxx_statusDebtPaid : "รอรับชำระ",
                    xxx_reasonRemark: "",
                    xxx_transactionDate : "20/11/2564",
                    xxx_updateBy : "06365 สุดา พันธ์โกศล",
                    xxx_transaction_Type : "test",
                    xxx_dealerEmpCode : "06366",
                    xxx_dealerName : "เสาวนีย์ สนนอก",
                    xxx_dealerPhoneNumber : "0982752574",
                    xxx_SLAbalance : 1,
                    xxx_lastDatePayment:"11/11/2564",
                    xxx_paidDate:"",
                    xxx_productListDetail :[
                        {
                            xxx_product_Id:1,
                            xxx_product:"ประกันสุขภาพ",
                            xxx_plan_Id: 1 ,
                            xxx_paidtype:1,
                            xxx_paidTypeName:"รายปี",
                            xxx_premiumprice:490,
                            xxx_insureddetail: "ร่มดี ศรีราชา",
                            xxx_insuredPhonenumber :"0616652250",
                            xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                            xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                            xxx_plan_bill_number:handleGenerateBill(),
                            xxx_plan_group_number:handleGenerateBillGroup(),
                            xxx_plan_invoice_number:"IN641000000101",
                            xxx_billPaymentNo : "RC641000054501",
                            xxx_appNo : "9456433",
                            xxx_debtNo : ""
                        }
                    ]
                }
                ,
                {
                    xxx_identitycard:"1456966322522",
                    xxx_title:3,
                    xxx_firstname:"B",
                    xxx_lastname:"BB",
                    xxx_phonenumber:"0616523663",
                    xxx_payerBranch : "เชียงราย",
                    xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                    xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                    xxx_premiumPrice:2000,
                    xxx_paymentType:"",
                    xxx_paymentMethod : "",
                    xxx_statusDebtPaid : "รอวิธีรับชำระ",
                    xxx_reasonRemark: "",
                    xxx_transactionDate : "20/11/2564",
                    xxx_updateBy : "06365 สุดา พันธ์โกศล",
                    xxx_transaction_Type : "test",
                    xxx_dealerEmpCode : "06366",
                    xxx_dealerName : "เสาวนีย์ สนนอก",
                    xxx_dealerPhoneNumber : "0982752574",
                    xxx_SLAbalance : 5,
                    xxx_lastDatePayment:"11/11/2564",
                    xxx_paidDate:"",
                    xxx_productListDetail :[
                        {
                            xxx_product_Id:1,
                            xxx_product:"ประกันสุขภาพ",
                            xxx_plan_Id: 1 ,
                            xxx_paidtype:1,
                            xxx_paidTypeName:"รายปี",
                            xxx_premiumprice:490,
                            xxx_insureddetail: "b bb",
                            xxx_insuredPhonenumber :"0616652250",
                            xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                            xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                            xxx_plan_bill_number:handleGenerateBill(),
                            xxx_plan_group_number:handleGenerateBillGroup(),
                            xxx_plan_invoice_number:"IN641000000101",
                            xxx_billPaymentNo : "RC641000054501",
                            xxx_appNo : "9456433",
                            xxx_debtNo : ""
                        }
                    ]
                }
                ,
                {
                    xxx_identitycard:"1456966322522",
                    xxx_title:3,
                    xxx_firstname:"B",
                    xxx_lastname:"BB",
                    xxx_phonenumber:"0616523663",
                    xxx_payerBranch : "เชียงราย",
                    xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                    xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                    xxx_premiumPrice:2000,
                    xxx_paymentType:"รับชำระหน้างาน",
                    xxx_paymentMethod : "Bill Payment",
                    xxx_statusDebtPaid : "ชำระแล้ว",
                    xxx_reasonRemark: "",
                    xxx_transactionDate : "20/11/2564",
                    xxx_updateBy : "06365 สุดา พันธ์โกศล",
                    xxx_transaction_Type : "test",
                    xxx_dealerEmpCode : "06366",
                    xxx_dealerName : "เสาวนีย์ สนนอก",
                    xxx_dealerPhoneNumber : "0982752574",
                    xxx_SLAbalance : null,
                    xxx_lastDatePayment:"11/11/2564",
                    xxx_paidDate:"11/12/2564",
                    xxx_productListDetail :[
                        {
                            xxx_product_Id:1,
                            xxx_product:"ประกันสุขภาพ",
                            xxx_plan_Id: 1 ,
                            xxx_paidtype:1,
                            xxx_paidTypeName:"รายปี",
                            xxx_premiumprice:490,
                            xxx_insureddetail: "b bb",
                            xxx_insuredPhonenumber :"0616652250",
                            xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                            xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                            xxx_plan_bill_number:handleGenerateBill(),
                            xxx_plan_group_number:handleGenerateBillGroup(),
                            xxx_plan_invoice_number:"IN641000000101",
                            xxx_billPaymentNo : "RC641000054501",
                            xxx_appNo : "9456433",
                            xxx_debtNo : "RC6410000000546"
                        }
                    ]
                }
              ];
       }
       else{
        testData = [
          {
              xxx_identitycard:"1499900286451",
              xxx_title:3,
              xxx_firstname:"A",
              xxx_lastname:"AA",
              xxx_phonenumber:"0616652250",
              xxx_payerBranch : "เชียงราย",
              xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
              xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
              xxx_premiumPrice:1040,
              xxx_numOfInstallments : 2 ,
              xxx_paymentType:"รับชำระหน้างาน",
              xxx_paymentMethod : "Bill Payment",
              xxx_statusDebtPaid : "ยกเลิก",
              xxx_reasonRemark: "เกินกำหนดรับชำระ",
              xxx_transactionDate : "20/11/2564",
              xxx_updateBy : "06365 สุดา พันธ์โกศล",
              xxx_transaction_Type : "test",
              xxx_dealerEmpCode : "06366",
              xxx_dealerName : "เสาวนีย์ สนนอก",
              xxx_dealerPhoneNumber : "0982752574",
              xxx_SLAbalance : 0,
              xxx_lastDatePayment:"11/11/2564",
              xxx_paidDate:"",
              xxx_productListDetail :[
                  {
                      xxx_product_Id:1,
                      xxx_product:"ประกันสุขภาพ",
                      xxx_plan_Id: 1 ,
                      xxx_paidtype:1,
                      xxx_paidTypeName:"รายปี",
                      xxx_premiumprice:490,
                      xxx_insureddetail: "a aa",
                      xxx_insuredPhonenumber :"0616652250",
                      xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                      xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                      xxx_plan_bill_number:handleGenerateBill(),
                      xxx_plan_group_number:handleGenerateBillGroup(),
                      xxx_plan_invoice_number:"IN641000000101",
                      xxx_billPaymentNo : "RC641000054501",
                      xxx_appNo : "9456433",
                      xxx_debtNo : ""
                  }
              ]
          },
          {
              xxx_identitycard:"1456966322522",
              xxx_title:3,
              xxx_firstname:"อารี",
              xxx_lastname:"มีนา",
              xxx_phonenumber:"0616523663",
              xxx_payerBranch : "เชียงราย",
              xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
              xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
              xxx_premiumPrice:2000,
              xxx_numOfInstallments : 2 ,
              xxx_paymentType:"รับชำระหน้างาน",
              xxx_paymentMethod : "Bill Payment",
              xxx_statusDebtPaid : "รอรับชำระ",
              xxx_reasonRemark: "",
              xxx_transactionDate : "20/11/2564",
              xxx_updateBy : "06365 สุดา พันธ์โกศล",
              xxx_transaction_Type : "test",
              xxx_dealerEmpCode : "06366",
              xxx_dealerName : "เสาวนีย์ สนนอก",
              xxx_dealerPhoneNumber : "0982752574",
              xxx_SLAbalance : 1,
              xxx_lastDatePayment:"11/11/2564",
              xxx_paidDate:"",
              xxx_productListDetail :[
                  {
                      xxx_product_Id:1,
                      xxx_product:"ประกันสุขภาพ",
                      xxx_plan_Id: 1 ,
                      xxx_paidtype:1,
                      xxx_paidTypeName:"รายปี",
                      xxx_premiumprice:490,
                      xxx_insureddetail: "ร่มดี ศรีราชา",
                      xxx_insuredPhonenumber :"0616652250",
                      xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                      xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                      xxx_plan_bill_number:handleGenerateBill(),
                      xxx_plan_group_number:handleGenerateBillGroup(),
                      xxx_plan_invoice_number:"IN641000000101",
                      xxx_billPaymentNo : "RC641000054501",
                      xxx_appNo : "9456433",
                      xxx_debtNo : ""
                  }
              ]
          }
          ,
          {
              xxx_identitycard:"1456966322522",
              xxx_title:3,
              xxx_firstname:"B",
              xxx_lastname:"BB",
              xxx_phonenumber:"0616523663",
              xxx_payerBranch : "เชียงราย",
              xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
              xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
              xxx_premiumPrice:2000,
              xxx_numOfInstallments :3 ,
              xxx_paymentType:"",
              xxx_paymentMethod : "",
              xxx_statusDebtPaid : "รอวิธีรับชำระ",
              xxx_reasonRemark: "",
              xxx_transactionDate : "20/11/2564",
              xxx_updateBy : "06365 สุดา พันธ์โกศล",
              xxx_transaction_Type : "test",
              xxx_dealerEmpCode : "06366",
              xxx_dealerName : "เสาวนีย์ สนนอก",
              xxx_dealerPhoneNumber : "0982752574",
              xxx_SLAbalance : 5,
              xxx_lastDatePayment:"11/11/2564",
              xxx_paidDate:"",
              xxx_productListDetail :[
                  {
                      xxx_product_Id:1,
                      xxx_product:"ประกันสุขภาพ",
                      xxx_plan_Id: 1 ,
                      xxx_paidtype:1,
                      xxx_paidTypeName:"รายปี",
                      xxx_premiumprice:490,
                      xxx_insureddetail: "b bb",
                      xxx_insuredPhonenumber :"0616652250",
                      xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                      xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                      xxx_plan_bill_number:handleGenerateBill(),
                      xxx_plan_group_number:handleGenerateBillGroup(),
                      xxx_plan_invoice_number:"IN641000000101",
                      xxx_billPaymentNo : "RC641000054501",
                      xxx_appNo : "9456433",
                      xxx_debtNo : ""
                  }
              ]
          }
          ,
          {
              xxx_identitycard:"1456966322522",
              xxx_title:3,
              xxx_firstname:"B",
              xxx_lastname:"BB",
              xxx_phonenumber:"0616523663",
              xxx_payerBranch : "เชียงราย",
              xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
              xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
              xxx_premiumPrice:2000,
              xxx_numOfInstallments : 2 ,
              xxx_paymentType:"รับชำระหน้างาน",
              xxx_paymentMethod : "Bill Payment",
              xxx_statusDebtPaid : "ชำระแล้ว",
              xxx_reasonRemark: "",
              xxx_transactionDate : "20/11/2564",
              xxx_updateBy : "06365 สุดา พันธ์โกศล",
              xxx_transaction_Type : "test",
              xxx_dealerEmpCode : "06366",
              xxx_dealerName : "เสาวนีย์ สนนอก",
              xxx_dealerPhoneNumber : "0982752574",
              xxx_SLAbalance : null,
              xxx_lastDatePayment:"11/11/2564",
              xxx_paidDate:"11/12/2564",
              xxx_productListDetail :[
                  {
                      xxx_product_Id:1,
                      xxx_product:"ประกันสุขภาพ",
                      xxx_plan_Id: 1 ,
                      xxx_paidtype:1,
                      xxx_paidTypeName:"รายปี",
                      xxx_premiumprice:490,
                      xxx_insureddetail: "b bb",
                      xxx_insuredPhonenumber :"0616652250",
                      xxx_branchCompanyName :"สำนักงานเขตสายไหม1",
                      xxx_workAddress: "1/3 หมู่5 แขวงสายไหม  เขตสายไหม กรุงเทพมหานคร 10210",
                      xxx_plan_bill_number:handleGenerateBill(),
                      xxx_plan_group_number:handleGenerateBillGroup(),
                      xxx_plan_invoice_number:"IN641000000101",
                      xxx_billPaymentNo : "RC641000054501",
                      xxx_appNo : "9456433",
                      xxx_debtNo : "RC6410000000546"
                  }
              ]
          }
        ];
       }
      


       let subRow = {
        no:"", 
        groupNo:"",
        refNo:"",
        product:"",
        insuredName:"",
        insuredPhonenumber:"",
        branchCompanyName:"",
        workAddress : "",
        detail:"",
        plan:"",
        typePlan:"",
        paid:"",
        receiptNo:"",
        appNo:"",
        status:"",
        transactionDate:"",
        transactionUpdateBy : "",
        transactionType : "",
        dearlerEmpCode : "",
        dearlerName : "",
        dearlerPhoneNumber: "",
        payerBranch :"",
      }
    
      var testDataNew = [];

      testData.forEach(function(item,i)  {

          //วนเก็บค่าใน sub table 
          var newPlan = [];
          item.xxx_productListDetail.forEach(function(itemProduct,j) {
              subRow.no = j+1;
              subRow.groupNo = itemProduct.xxx_plan_group_number;
              subRow.refNo = itemProduct.xxx_plan_invoice_number;
              subRow.product = handleProductName(itemProduct.xxx_product_Id);
              subRow.insuredName = itemProduct.xxx_insureddetail;
              subRow.insuredPhonenumber=itemProduct.xxx_insuredPhonenumber;
              subRow.branchCompanyName = itemProduct.xxx_branchCompanyName;
              subRow.workAddress = itemProduct.xxx_workAddress;
              subRow.detail = itemProduct.xxx_product;
              subRow.plan = handlePlanName(itemProduct.xxx_plan_Id);
              subRow.typePlan = itemProduct.xxx_paidTypeName;
              subRow.paid = itemProduct.xxx_premiumprice;
              subRow.receiptNo =  itemProduct.xxx_debtNo ;
              subRow.appNo =itemProduct.xxx_appNo;
              subRow.status = "";
              subRow.transactionDate = item.xxx_transactionDate;
              subRow.transactionUpdateBy =  item.xxx_updateBy;
              subRow.transactionType = item.xxx_transaction_Type;

              subRow.dealerEmpCode = item.xxx_dealerEmpCode;
              subRow.dealerName = item.xxx_dealerName;
              subRow.dealerPhoneNumber = item.xxx_dealerPhoneNumber;

              subRow.payerBranch = item.xxx_payerBranch ;

              newPlan = [
                ...newPlan,
                createData(subRow.no
                  ,subRow.groupNo
                  ,subRow.refNo
                  ,subRow.product
                  ,subRow.insuredName
                  ,subRow.insuredPhonenumber
                  ,subRow.branchCompanyName
                  ,subRow.workAddress
                  ,subRow.plan
                  ,subRow.detail
                  ,subRow.typePlan
                  ,subRow.paid
                  ,subRow.receiptNo
                  ,subRow.appNo
                  ,subRow.status
                  ,subRow.transactionDate
                  ,subRow.transactionUpdateBy
                  ,subRow.transactionType
                  ,subRow.dealerEmpCode
                  ,subRow.dealerName
                  ,subRow.dealerPhoneNumber
                  ,subRow .payerBranch
                  ),
              ];
          })


            testDataNew.push([
                item.xxx_productListDetail[0].xxx_plan_bill_number ,
                handleTitleName(item.xxx_title)  + '' + item.xxx_firstname + ' ' + item.xxx_lastname ,
                props.moduleName === "DebtRenewal" || props.moduleName === "DebtStorage" ? item.xxx_productListDetail.length : item.xxx_numOfInstallments , //กรณีหน้า คืนความคุ้มครอง
                item.xxx_premiumPrice,
                item.xxx_paymentType,
                item.xxx_paymentMethod,
                item.xxx_lastDatePayment,
                item.xxx_paidDate,
                item.xxx_statusDebtPaid,
                "",
                newPlan,
                item.xxx_branchCompanyName,
                item.xxx_workAddress,
                item.xxx_phonenumber
            ]);

            // console.log(newPlan);
            // // console.log(newdata);
            console.log(testDataNew);

        });
        
        setData(testDataNew);

        // }
      }, [debtRenewalReducer.indexTab])
    
  

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} lg={12}> 
            <br></br>
        </Grid>
        <Grid item xs={12} lg={12}>
        <ExpanedDataTable 
            name="testTable"
            title=""
            columns={columns}
            data={data}
            paginated={paginated}
            setPaginated={setPaginated}
            totalRecords={totalRecords}
            selectableRows={false}
            headerbgcolor={"#2699FB !important"}
            headerbgExpandedcolor ={"#F25D3F"}
            moduleName={props.moduleName}

        ></ExpanedDataTable>

        </Grid>


      <DialogPayerContact></DialogPayerContact>

    </Grid>
    )
}
