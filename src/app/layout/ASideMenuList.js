import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import MenuItem from "./components/MenuItem";
import ParentsMenu from "./components/ParentsMenu";
import * as CONST from "../../Constant";
import { PERMISSIONS } from "../../Constant";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function ASideMenuList() {
  const classes = useStyles();

  return (
    <List
      dense
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        style={{ height: 42 }}
      >
        {CONST.APP_INFO.name} - <small>{CONST.APP_INFO.version}</small>
      </ListSubheader>
      <Divider style={{ marginBottom: 15 }} />

      <MenuItem iconName="home" text="Home" path="/home"></MenuItem>

      <ParentsMenu iconName="admin_panel_settings" text="Operation">

          <MenuItem  text="CustomerPayment" path="/CustomerPayment"></MenuItem>
          <MenuItem  text="PaymentMethods" path="/PaymentMethods"></MenuItem>
          <MenuItem  text="BillMethod" path="/BillPaymentMethod"></MenuItem>
          <MenuItem  text="CardMethod" path="/CardPaymentMethod"></MenuItem>
          <MenuItem  text="Success" path="/SuccessPaid"></MenuItem>
          <MenuItem  text="Failed" path="/FailedPaid"></MenuItem>
          <MenuItem  text="PaySlip" path="/PaySlip"></MenuItem>

      </ParentsMenu>
    
      <ParentsMenu iconName="admin_panel_settings" text="จัดรายการตั้งหนี้">
         <MenuItem  text="ต่ออายุ (รายปี/ราย 3 ปี)" path="/DebtRenewal"></MenuItem>
         <MenuItem  text="ขึ้นจัดเก็บ" path="/DebtStorage"></MenuItem>
         <MenuItem  text="คืนความคุ้มครอง" path="/DebtRecovery"></MenuItem>
      </ParentsMenu>

      <MenuItem iconName="face_retouching_natural" text="Manage employee" path="/employeeManage" permissions={[PERMISSIONS.employee_read]}></MenuItem>
      
      <ParentsMenu iconName="admin_panel_settings" text="Admin">
        <MenuItem iconName="star" text="Title" path="/title"></MenuItem>
      </ParentsMenu>

      <ParentsMenu iconName="admin_panel_settings" text="Test Permission" permissions={[PERMISSIONS.employee_delete]}>
        <MenuItem iconName="star" text="Title" path="/permissionTest" permissions={[PERMISSIONS.employee_delete]}></MenuItem>
      </ParentsMenu>

       {/* Demo */}
       <ParentsMenu iconName="star" text="Demo">
        <MenuItem iconName="star" text="Alert" path="/demo/alert"></MenuItem>
        <MenuItem
          iconName="integration_instructions"
          text="Form Components"
          path="/demo/formDemo"
        ></MenuItem>
        <MenuItem
          iconName="view_list"
          text="Data Table"
          path="/demo/datatableList"
        ></MenuItem>
        <MenuItem
          iconName="storage"
          text="Redux Basic"
          path="/demo/reduxDemo"
        ></MenuItem>
        <MenuItem
          iconName="tab"
          text="Tab Basic"
          path="/demo/tabBasic"
        ></MenuItem>
        {/* Start QR - BarCode */}
        <ParentsMenu iconName="qr_code" text="QR-BarCode">
          <MenuItem
            iconName="horizontal_split"
            text="Barcode Generate"
            path="/demo/BarcodeGenerateDemo"
          ></MenuItem>
          <MenuItem
            iconName="qr_code_2"
            text="QR Generate"
            path="/demo/QRGenerateDemo"
          ></MenuItem>
          <MenuItem
            iconName="qr_code_scanner"
            text="QR Reader"
            path="/demo/QRReaderDemo"
          ></MenuItem>
        </ParentsMenu>
        {/* End QR - Barcode */}

        {/* Start Reporting */}
        <ParentsMenu iconName="summarize" text="Reporting">
          <MenuItem
            iconName="picture_as_pdf"
            text="Pdf Generate"
            path="/demo/pdfGenerrate"
          ></MenuItem>
          <MenuItem
            iconName="assessment"
            text="Chart Basic"
            path="/demo/apexcharts"
          ></MenuItem>
          <MenuItem
            iconName="add_chart"
            text="Chart DrillDown"
            path="/demo/chartDrillDown"
          ></MenuItem>
          <MenuItem
            iconName="local_printshop"
            text="Print Component"
            path="/demo/PrintComponent"
          ></MenuItem>
        </ParentsMenu>
        {/* End Reporting */}
        </ParentsMenu>
        {/* End Demo */}
    </List>
  );
}
