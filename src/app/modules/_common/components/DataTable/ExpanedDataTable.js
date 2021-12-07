import React from 'react'
import MUIDataTable from "mui-datatables";
import { Typography, CircularProgress ,Link , Button ,Zoom,Tooltip,Icon,Grid} from "@material-ui/core";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import * as debtRenewalRedux from '../../../DebtRenewalManagement/_redux/debtRenewalRedux' ;
import { useSelector , useDispatch } from 'react-redux';
import DialogTransactionLog from '../../../DebtRenewalManagement/components/DialogTransactionLog';
import DialogAppInsured from '../../../DebtRenewalManagement/components/DialogAppInsured';




const StyledTableCell = withStyles((theme) => ({
	head: {
	  backgroundColor:'#A5A5A5',
	  color: theme.palette.common.white,
	},
	body: {
	  fontSize: 14,
	},
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
	root: {
	  '&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	  },
	},
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  const useStyles = makeStyles({
	table: {
	  minWidth: 700,
	},
  });
  
  

function ExpanedDataTable(props) {

	const classes = useStyles();
  const dispatch = useDispatch();


  const [opentransactionLog, setOpenTransactionLog] = React.useState(false);
  const [openDialogApp, setOpenDialogApp] = React.useState(false);

  const [appData, setAppData] = React.useState({});

  const handleCloseApp = () => {
    setOpenDialogApp(false);
  }
  


    const options = {
        filterType: "dropdown",
        onFilterChange: (changedColumn, filterList) => {
          console.log(changedColumn, filterList);
        },
        print: false,
        download: false,
        filter: false,
        search: false,
        selectableRows:props.selectableRows,
        serverSide: true,
        selectableRowsOnClick: props.cursorPointer,
        count: props.totalRecords,
        customToolbarSelect: () => {},
        rowsSelected: props.selectedRows ? props.selectedRows : [],
        onRowSelectionChange: (rowsSelectedData, allRows, rowsSelected) => {
          props.rowsSelectedIndex({
            rowsSelected: rowsSelected,
            allRows: allRows,
            rowsSelectedData: rowsSelectedData,
          });
        },
        page: props.paginated.page - 1,
        rowsPerPage: props.paginated.recordsPerPage,
        rowsPerPageOptions: [5, 10, 15, 20, 30, 50],
        responsive: "vertical",
        rowHover: true,
        onChangeRowsPerPage: (numberOfRows) => {
          props.setPaginated({ ...props.paginated, recordsPerPage: numberOfRows });
        },
        onChangePage: (currentPage) => {
          props.setPaginated({ ...props.paginated, page: currentPage + 1 });
        },
        onColumnSortChange: (changedColumn, direction) => {
          props.setPaginated({
            ...props.paginated,
            orderingField: `${changedColumn}`,
            ascendingOrder: direction === "asc" ? true : false,
          });
        },
        textLabels: {
          body: {
            noMatch: "ไม่พบข้อมูล",
            toolTip: "Sort",
            columnHeaderTooltip: (column) => `จัดเรียงจาก ${column.label}`,
          },
          pagination: {
            next: "ถัดไป",
            previous: "ย้อนกลับ",
            rowsPerPage: "ข้อมูลต่อหน้า",
            displayRows: "จาก",
          },
          viewColumns: {
            title: "แสดง Columns",
            titleAria: "Show/Hide Table Columns",
          },
        },
        setTableProps: () => {
          return {
            // material ui v4 only
            size: props.denseTable ? "small" : "medium",
          };
        },
        expandableRows: true,
        renderExpandableRow: (rowData, rowMeta) => {
          return (
            <React.Fragment>
              <tr>
                <td colSpan={11}>
                  <TableContainer component={Paper} >
                    <Table style={{width:"100%"}} size="large"  style={{backgroundColor:'#E9EAEB'}}>
                      <TableHead  >
                        <TableRow >
                          <StyledTableCell >ลำดับ</StyledTableCell>
                          <StyledTableCell  align="left">เลขที่กลุ่ม</StyledTableCell>
                          <StyledTableCell  align="left">เลขที่อ้างอิง</StyledTableCell>
                          <StyledTableCell  align="left">ผลิตภัณฑ์</StyledTableCell>
                          <StyledTableCell  align="left">ผู้เอาประกัน</StyledTableCell>
                          {/* <StyledTableCell  align="left">รายละเอียด</StyledTableCell> */}
                          <StyledTableCell  align="left">แผน</StyledTableCell>
                          <StyledTableCell  align="left">ประเภท</StyledTableCell>
                          <StyledTableCell  align="left">เบี้ย</StyledTableCell>
                          <StyledTableCell  align="left">เลขที่ใบรับฝากเงิน</StyledTableCell>
                          <StyledTableCell  align="left">เลขที่ Application</StyledTableCell>
                          <StyledTableCell  align="left"></StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowData[10].map(row => (
                          <TableRow  leRow key={row.no}>
                            <StyledTableCell  component="th" scope="row">
                              {row.no}
                            </StyledTableCell>
                            <StyledTableCell  align="left">{row.groupNo}</StyledTableCell>
                            <StyledTableCell  align="left">
                                  <Typography >
                                        <Link 
                                        href="#" 
                                        style={{color:'#55A5F6'}}
                                        onClick={() => {
                                          
                                            let transLogObj = {
                                              xxx_transactionDate:row.transactionDate , 
                                              xxx_transactionUpdateBy : row.transactionUpdateBy , 
                                              xxx_transactionType:row.transactionType,
                                              xxx_flag:true
                                            };
                                            
                                            dispatch(debtRenewalRedux.actions.updateTransactionLogDialog(transLogObj));
                                         
                                        }}
                                        >{row.refNo} </Link>
                                  </Typography>
                            </StyledTableCell>
                            <StyledTableCell  align="left">{row.product}</StyledTableCell>
                            <StyledTableCell  align="left">{row.insuredName}</StyledTableCell>
                            {/* <StyledTableCell  align="left">{row.detail}</StyledTableCell> */}
                            <StyledTableCell  align="left">{row.plan}</StyledTableCell>
                            <StyledTableCell  align="left">{row.typePlan}</StyledTableCell>
                            <StyledTableCell  align="left">{row.paid}</StyledTableCell>
                            <StyledTableCell  align="left">{row.receiptNo}</StyledTableCell>
                            <StyledTableCell  align="left">
                                          <Typography >
                                              <Link 
                                              href="#" 
                                              style={{color:'#55A5F6'}}
                                              onClick={() => {
                                                if(props.moduleName === "DebtStorage" || props.moduleName === "DebtRecovery"){
                                                  
                                                      let appObj = {
                                                        appNo:row.appNo , 
                                                        insuredName : row.insuredName , 
                                                        payerBranch : row.payerBranch ,
                                                        dealer:row.dealerEmpCode + " - " + row.dealerName + " (" + row.dealerPhoneNumber + ")",
                                                        flag:true
                                                      };
                                                       dispatch(debtRenewalRedux.actions.updateAppInsuredInfo(appObj));
                                                      
                                                }
                                              }}
                                              >{row.appNo} </Link>
                                        </Typography>
                            </StyledTableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </td>
              </tr>
            </React.Fragment>
          );
        },
    };

    const getMuiTheme = () => createTheme({
      overrides: {
        MuiTableCell: {
          head: {
            backgroundColor: props.headerbgcolor,
            fontFamily: props.fontFamily,
          },
          root: {
            fontFamily: props.fontFamily,
          },
        },
      },
    });

    return (

      <div>
         <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              denseTable={props.denseTable}
              title={
                <React.Fragment>
                  <Typography variant="h6" align="left">
                    {props.title}
                  </Typography>
                  {props.loading && <CircularProgress></CircularProgress>}
                </React.Fragment>
              }
                data={props.data}
                columns={props.columns}
                options={options}
            />
        </MuiThemeProvider>


        <DialogTransactionLog></DialogTransactionLog>
        <DialogAppInsured></DialogAppInsured>

     
      </div>
   

      );
    }

    ExpanedDataTable.propTypes = {
        name: PropTypes.string,
        title: PropTypes.string,
        paginated: PropTypes.object,
        setPaginated: PropTypes.func,
        rowsSelectedIndex: PropTypes.func,
        data: PropTypes.array,
        columns: PropTypes.array,
        totalRecords: PropTypes.number,
        denseTable: PropTypes.bool,
        cursorPointer: PropTypes.bool,
        loading: PropTypes.bool,
        selectableRows: PropTypes.string,
        selectedRows: PropTypes.array,
      };
      
      // Same approach for defaultProps too
      ExpanedDataTable.defaultProps = {
        name: "please set name",
        title: "please set title",
        paginated: {
          page: 1,
          recordsPerPage: 10,
          orderingField: "",
          ascendingOrder: true,
        },
        setPaginated: () => {},
        data: [],
        columns: [],
        totalRecords: 0,
        denseTable: true,
        selectableRows: "none",
        selectedRows: [],
        selectableRowsHeader: false,
        fontFamily: "Sarabun",
        cursorPointer: false,
        loading: false,
      };

export default ExpanedDataTable
