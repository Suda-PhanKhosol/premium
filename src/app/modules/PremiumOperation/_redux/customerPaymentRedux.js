export const actionTypes = {
	MergePayer: "[MergePayer] Action",
};

const initialState = {
	productListPayment : 
        {
            xxx_payerName : "สุดา พันธ์โกศล",
            xxx_paymentRefCode : "B6410000001" ,
            xxx_itemAmount : 3,
            xxx_paymentDueDate : "12 ต.ค. 2564" ,
            xxx_paymentTotal : 1040 ,
            xxx_paymentTotalThai :"หนึ่งพันสี่สิบบาทถ้วน",
            xxx_productDetail : [
                {
                    xxx_productName : "ประกันสุขภาพ",
                    xxx_productType : "631", //plan ?
                    xxx_paymentType : "รายเดือน",
                    xxx_premium : 490,
                    xxx_insuredName : "สุชาดา มานี", //insuredName
                    xxx_dateProtected : "1 ม.ค. 2564",
                    xxx_applicationID : "CL00125455"
                },
                {
                    xxx_productName : "ประกันสุขภาพ",
                    xxx_productType : "631+",
                    xxx_paymentType : "รายเดือน",
                    xxx_premium : 520,
                    xxx_insuredName : "มานี มานะ",
                    xxx_dateProtected : "10 ก.ค. 2564",
                    xxx_applicationID : "CL00152888"
                },
                {
                    xxx_productName : "ประกันชีวิต",
                    xxx_productType : "631",
                    xxx_paymentType : "รายเดือน",
                    xxx_premium : 400,
                    xxx_insuredName : "รุจิรา วันนา",
                    xxx_dateProtected : "20 ต.ค. 2564",
                    xxx_applicationID : "L4525456456"

                },
                {
                    xxx_productName : "ประกันบ้าน",
                    xxx_productType : "500",
                    xxx_paymentType : "รายเดือน",
                    xxx_premium : 200,
                    xxx_insuredName : "ศรยุทธ ช่องสาม",
                    xxx_dateProtected : "2 ก.ค. 2564",
                    xxx_applicationID : "H012456456"

                }
            ]
        },
       billPaymentDetail :{
           xxx_billPaymentLastDate : "30/11/2564",
           xxx_billPaymentTotal : 1040,
           xxx_billPaymentRefCode : "Ref00111111"
       },
       qrCodeBillGenFormat :{
            xxx_taxID : "0135551004383",
            xxx_suffix : "01",
            xxx_ref1 : "00111111555",
            xxx_ref2 : "00111111554",
            xxx_totalAmount : "0"
        },

        paySlip:{
            xxx_paidDate :"11/04/2564",
            xxx_timePaid : "15:45",
            xxx_paidRef : "B64100000001",
            xxx_refNo : "RB0000001",
            xxx_paidDetail : [
                {
                    xxx_refDetail : "RC64100000101" ,
                    xxx_productName : "ประกันสุขภาพ" ,
                    xxx_productType : "631" ,
                    xxx_paymentType : "รายเดือน" ,
                    xxx_premium : 490 ,
                    xxx_insuredName : "นางสาว พิมพาสวย อ่อนทวย" ,

                },
                {
                    xxx_refDetail : "RC64100000201" ,
                    xxx_productName : "ประกันสุขภาพ" ,
                    xxx_productType : "631+" ,
                    xxx_paymentType : "รายเดือน" ,
                    xxx_premium : 520 ,
                    xxx_insuredName : "นางสาว สุกัญญษ อ่อนทวย" ,

                },
                {
                    xxx_refDetail : "RC64100000101" ,
                    xxx_productName : "ประกันอุบัติเหตุ PA30" ,
                    xxx_productType : "PA30" ,
                    xxx_paymentType : "รายเดือน" ,
                    xxx_premium : 30 ,
                    xxx_insuredName : "นางสาว อยู่ดี อ่อนทวย" ,

                }, 
                {
                    xxx_refDetail : "RC64100000101" ,
                    xxx_productName : "ประกันอุบัติเหตุ PA30" ,
                    xxx_productType : "PA30" ,
                    xxx_paymentType : "รายเดือน" ,
                    xxx_premium : 30 ,
                    xxx_insuredName : "นางสาว อยู่ดี อ่อนทวย" ,

                },
                {
                    xxx_refDetail : "RC64100000101" ,
                    xxx_productName : "ประกันอุบัติเหตุ PA30" ,
                    xxx_productType : "PA30" ,
                    xxx_paymentType : "รายเดือน" ,
                    xxx_premium : 30 ,
                    xxx_insuredName : "นางสาว อยู่ดี อ่อนทวย" ,

                },
            ]
        }
    
};


export const reducer =
	(state = initialState, action) => {
		switch (action.type) {
			default:
				return state;
		}
	};
