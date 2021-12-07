export const actionTypes = {
	UPDATE_INDEX_TAB : "[UPDATE_INDEX_TAB] Action",
  UPDATE_PAYER_CONTACT_DIALOG : "[UPDATE_PAYER_CONTACT_DIALOG] Action",
  UPDATE_TRANSACTION_LOG_DIALOG : "[UPDATE_TRANSACTION_LOG_DIALOG] Action",
  UPDATE_APP_INSURED_DIALOG : "[UPDATE_APP_INSURED_DIALOG] Action"
};

const initialState = {
    indexTab : 0,
    isAdvanceFilter: false ,
    payerContact: {},
    isPayerContactDialog : false ,
    transactionLog:{},
    isTransactionLogDialog:false,
    appInsuredInfo:{},
    isappInsuredInfoDialog:false,
    products: [
      { id: 1, name: 'PH' },
      { id: 2, name:  'PA 30' },
      { id: 3, name:  'PL' },
      { id: 4, name:  'Home' },
      { id: 5, name:  'Motor' },
      { id: 6, name:  'Cancer' },
    ],

    plans: [
      { id: 1, name: '631' },
      { id: 2, name:  '631+' },
      { id: 3, name:  '501' },
    ],

    remarkReasons: [
      { id: 1, name: 'เกินกำหนดชำระ' },
      { id: 2, name:  'เปลี่ยนกรมธรรม์' },
      { id: 3, name:  'เสียชีวิต' },
    ],

    statuses: [
      { id: 1, name: 'รอรับชำระ' },
      { id: 2, name:  'รอวิธีรับชำระ' },
      { id: 3, name:  'ชำระแล้ว' },
      { id: 4, name:  'ยกเลิก' },
    ],
    
};


export const reducer =
	(state = initialState, action) => {
		switch (action.type) {
            case actionTypes.UPDATE_INDEX_TAB: {
                return {
                  ...state,
                  indexTab: action.payload.indexTab,
                  isAdvanceFilter: action.payload.isAdvanceFilter,
                };
              }

              case actionTypes.UPDATE_PAYER_CONTACT_DIALOG: {
                return {
                  ...state,
                  payerContact: action.payload,
                  isPayerContactDialog : action.payload.flag
                };
              }

              case actionTypes.UPDATE_TRANSACTION_LOG_DIALOG: {
                return {
                  ...state,
                  transactionLog: action.payload,
                  isTransactionLogDialog : action.payload.xxx_flag
                };
              }

              case actionTypes.UPDATE_APP_INSURED_DIALOG: {
                return {
                  ...state,
                  appInsuredInfo: action.payload,
                  isappInsuredInfoDialog : action.payload.flag
                };
              }


			default:
				return state;
		}
};


export const actions = {
        updateIndexTab: (payload) => ({ type: actionTypes.UPDATE_INDEX_TAB, payload }),
        updatePayerContactDialog: (payload) => ({ type: actionTypes.UPDATE_PAYER_CONTACT_DIALOG, payload }),
        updateTransactionLogDialog: (payload) => ({ type: actionTypes.UPDATE_TRANSACTION_LOG_DIALOG, payload }),
        updateAppInsuredInfo: (payload) => ({ type: actionTypes.UPDATE_APP_INSURED_DIALOG, payload }),
        
};