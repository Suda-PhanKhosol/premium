//generate PDF ใช้ pdfmake
//ลิ้งตัวอย่าง: https://github.com/bpampuch/pdfmake
//ลิ้งตัวอย่าง: http://pdfmake.org/playground.html

import pdfMake from "pdfmake/build/pdfmake";
import { siamsmile , kiatKun ,thanaChad ,ktbBank,scbBank,bualuangBank ,kBank,aomsinBank,tmbBank ,waterMark ,qrCode } from './image'



pdfMake.fonts = {
	Sarabun: {
		normal: `https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew-webfont.ttf`,
		bold: `https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf`,
		italics: `https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_italic-webfont.ttf`,
		bolditalics: `https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bolditalic-webfont.ttf`,
	},
};

export const BillPaymentPDF = ( productListPayment ,billPaymentDetail ,encodeAllImg,encodeQRCode) => {
	

	var listProductPayment = [];
	var listProductPrice = [];

	productListPayment.xxx_productDetail.map((productItem , index) => {
			listProductPayment.push([
				 `เบี้ย ${productItem.xxx_productName} งวดคุ้มครอง ${productItem.xxx_dateProtected} ผู้เอาประกันภัย : ${productItem.xxx_dateProtected} แผน ${productItem.xxx_productType} AppID : ${productItem.xxx_applicationID}`
			]) ; 
			listProductPrice.push([`${productItem.xxx_premium}`]);
	})
			// listProductPayment.push(['ยอดที่ต้องชำระ', '', '','','',`${productListPayment.xxx_paymentTotal}`]) ; 


	var docDefinition = {
		// watermark: { text: 'test watermark', color: 'blue', opacity: 0.3, bold: true, italics: false },
		header: function(currentPage, pageCount, pageSize) {
			// you can apply any logic and return any valid pdfmake element
		
			return [
			//   { text: 'simple text', alignment: (currentPage % 2) ? 'left' : 'right' },
			 
			  { canvas: [ { type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 } ] }
			]
		  },
		background: function(currentPage, pageSize) {
			return {image: `${encodeAllImg[8]}`, width: 600}
		}, 
		content: [
			// {image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABUlJREFUeF7tndt62kAQg+H9Hzr9KE5rG3b2lxg7IVEvy3gPozlotYZcL5fLx+XAfx8f2+Gv1+u/2dafrf//ZtDxmbKt0br2Y+zXqcxBbG/eCSCXyyWANGVBlVkkIj9tviUg+/KibGhte/Tm3HK2XqO7V7o3xXfrMTcly11kVWerMd16HEAUuE+oxwEkgPzzwJeWLFpSKLW97codc9Sj9rFydPZUgLh7wz2kY4IKrCrx3N4TQHb0dZ8FAeQx7CqflCzru2RItQ4XcFrqzijHb1eyAsgSPsmQraZ2VDlOhjxhEyMy8KtKVgeTUlQCmvGVxPKjaW8AuUP/bUpWABEBERWTl+SFLiblCqSj+ZUe0uGvL1V7HTlkJr8EkCdh4QhwyZClfK2vcN3oUpjOKK0DyBNA3BqoiIRnvuTQ8eJElzRDffujX3IIIJMTcCU9dDjvNr4rvzsndRr1it31o6txKLNOiIDiWGVa2qccUqKso7INIIt3aIZ0OX5IbpIhd9cEkF2IuD1Eidi3KFnuq6RUh6LSg6LEum3vCKWWqg1rO3yFq0RbAHn0Fg2qALL47i0yhDZ1Wn8rGWXfPKt07zhPKBlPqS4FVSmrm/uQALJoSIPvrVQBRvvjLDACyORg2t0fJUAoy3JFNve5ahO0HLhltjxJF5nUMR8WF13Hus8FkEleuY51nwsgAWRW6v9+TlnWfjBcZtcsS6mBim3HaZaO4dLl6iQ9mps2/0ore2BxAeQxMaijqV0AeXIyV5xCHU3tlLk39yFKGerQbWjjPmJdVY2n8ykKNd7rESWrqscOkNRB+6aLuvRiVPWe0X4CyBMPd9HqACLQ7GTIi5FImx21Uzi9e05QytvIlmZZNdchTZ06mtoFkGSIlTAtGVKpvR2nXroz5W5B6Smj+d0x6EUW3feeGZZqbwB5dGsAmfwwgdJfRpqUMkYA+W2AVHfqHdHQcZql0vW+HivP0ZrvKA37sUufBBAKxd0ugDwpWeXBCr49osHw3/pUQJTy0sG5R6KdlOIrAG7PUWboAkKDQSEKG7JRqb10czRqqs0op3Z3XUf0lA7mFkCOSI9Jf6HBUGpZbiQ6+02GLKTBZVkuJR49V/UvBWAqidD5qN0ra9wEfgC5u3KUoQFkCTVac2eMbMTkqKOpXVuG0F9ycJmU61hKL5UrXGctCiAd5RL/+EwAqUvb7BSPCVIypC42yRBQjN1787coWZRldZ2yaZPtkFU6Gr57PqrmLscMII+9gZ6x3HIWQJZwdVjQl2aIwqSo2qu8vADax0smbu9xJnXpOH4vq5KTaeTtqaHTZB3nfD4TQMS/nPCKs8mzbwcI2dSrNt3iotJY6emfMjyXxVXPnf57WQHkMSzWPgkgEwam9Dmll65hCSBPatfImacDQn/Jwe0ddENuL1CeU2j9534V2u6Mf5tnc4QIIHWoBZDFP0dklhPBXwoIdcKsfDlakHKypbS0KmcUHMUnblPfNHh6HzIDYcQaqBYUQO4exDeGAWTugWTI5L3fH1ey3DpLe8iozFVC5ixOaZR2gDVbi/P56X/pc7RI6sjZJuk4AWTiSerIADLzgCixU4miQypXKCvY5tSErrlilKeXrABS/znXADKNe26QDJn4KiVrcRCNlMqf+NVL4SttleTiUnyeP2PLzX1IJZ24iwwgGkwBRPwxAipmajD8t8aAdEygyNcdh0aqEtCLLWr3VxiEX8kuD6Vnq7100a6sQsenjqZ2AWRBzM1A6mhqF0B+AyBuz6D01Y0i9zyhRLdTIhWBEtP4s19ycGp8AGlMlY4a/5sA+QORthv+wm/Q7wAAAABJRU5ErkJggg=='},
			//********************************************************************* 0 Header PDF ********************************************************************************/
			{
				style:'tableExample',
				table:{
					headerRows:1,
					//col span * * * *
					//		   1  2  3  4 
					widths: [250, "*"],  //colspan 2
					body:[
						//ไม่ระบุ border จะเป็น true ทั้งหมด L  R  T  B  
						[
							{
								border:[false,false,false,false],
								columns : [
										{
											image:`${encodeAllImg[9]}`,
											width: 80,
											alignment: "left",
										}
								],
							},
							{
								border:[false,false,false,false],
								//ห้าต้องการเพื่ม row ใน col ==> columns : [[ {} ,{} ,{} ]]
								columns : [
									[
										{
											text: "บ.สยามสไมล์โบรกเกอร์ (ประเทศไทย) จำกัด",
											alignment:"right"
										},
										{
											text:"เลขที่ 89/6-10 ชั้น 4,5 ถนนเฉลิมพงษ์",
											alignment:"right"

										},
										{
											text: "แขวงสายไหม เขตสายไหม กรุงเทพ 10220",
											alignment:"right"
										}
									]
									
								],
							}
						],
					]
				}
			},
			{
				table:{
					headerRows:1,
					//col span * * * *
					//		   1  2  3  4 
					widths: [250, "*"],  //colspan 2
					body:[
						//ไม่ระบุ border จะเป็น true ทั้งหมด L  R  T  B  
						[
							{
								border:[false,false,false,false],
								columns : [
									[
										{
											text:`เรียน คุณ ${productListPayment.xxx_payerName}`
										},
										{
											text:`Reference : ${billPaymentDetail.xxx_billPaymentRefCode}`
										}
									]
								],

							},
							{
								border:[false,false,false,false],
								columns:[
									[
										{
											text:"ใบแจ้งชำระเงิน",
											alignment:"center"
										},
										{
											text:"(Bill Payment Pay-In-Slip)",
											alignment:"center"
										}
									]
								],
								fillColor:'#DBDBDB'
							}
						],
					]
				}
			},
			{
				table:{
					headerRows:1,
					//col span * * * *
					//		   1  2  3  4 
					widths: [250, "*"],  //colspan 2
					body:[
						//ไม่ระบุ border จะเป็น true ทั้งหมด L  R  T  B  
						[
							{
								border:[false,false,false,false],
								columns : [
									[
										{
											image:`${encodeQRCode}`,
											width:50,
											alignment:'left'
										}
									]
								],

							},
							{
								border:[false,false,false,false],
								columns:[
									[
										{
											text:"ใบแจ้งชำระเงิน",
											alignment:"right"
										}
									]
								]
							}
						],
					]
				}
			},
		
			//******************************************************************* 1 Total ************************************************************************************* */
			{
				style:'tableExample',
				table:{
					headerRows:1,
					//col span * * 
					//		   1  2  
					widths: [250, "*"],  //colspan 2
					body:[
						//ไม่ระบุ border จะเป็น true ทั้งหมด L  R  T  B  
						[
							{
								columns : [
									{
										width: "auto",
										text: "ยอดที่ต้องชำระ : ",
										bold: true,
									},
									{
										width: "*",
										text:  `${productListPayment.xxx_paymentTotal}`,
										alignment:"center"
									},
									{
										width: 50,
										text: "บาท",
										bold: true,
										alignment:"right"
									}
								],
							},
							{}
						],
					]
				}
			},


			//******************************************************************* 2 List Detail******************************************************************************** */
			{
				style:'tableExample',
				table:{
					headerRows:1,
					//col span * * * 
					//		   1  2  3  
					widths: [250, "*" ,"*"],  //colspan 3
					heights:[8,8,200], //อิงตาม arry in body  [4] in List Detail
					body:[
						[
							{
								colSpan: 2,
								border: [true, true, false, false],
								columns: [
									{
										text: "รายการ",
										alignment:"center"
									},
								],
								fillColor:'#DBDBDB',
								columnGap: 20,
								alignment: "center"
							},

							"",
							{
								border: [false, true, true, false],
								columns: [
									{
										width: "*",
										text: "จำนวนเงิน (บาท)",
										alignment: "right"
									},
								],
								columnGap: 2,
								fillColor:'#DBDBDB',

							},
						],
						[
							{
								colSpan: 2,
								border: [true, false, false, false],
								columns: [
									{
										text: "(Description)",
										alignment:"center"
									},
								],
								fillColor:'#DBDBDB',
								columnGap: 20,
								alignment: "center"
							},

							"",
							{
								border: [false, false, true, false],
								columns: [
									{
										width: "*",
										text: "Amount (Bath)",
										alignment: "right"
									},
								],
								columnGap: 2,
								fillColor:'#DBDBDB',

							},
						],
						[
							{
								style:'itemProductDetail',
								colSpan: 2,
								border: [true, false, false, false],
								columns: [listProductPayment],
							},
							"",
							{
								style:'itemProductDetail',
								border: [false, false, true, false],
								columns: [listProductPrice],
								alignment:"right"
							}
						],
						[
							{
								style:'itemProductDetail',
								colSpan: 2,
								border: [true, false, false, true],
								text:"ยอดที่ต้องชำระ",
								bold:true,
								alignment:"left"
							},
							"",
							{
								style:'itemProductDetail',
								border: [false, false, true, true],
								text:`${productListPayment.xxx_paymentTotal}`,
								alignment:"right",
								bold:true
							}
						],
						
					]
				},
				
			},



			//*************************************************************** 3 Cut Paper ************************************************************************************* */
			{
				columns:[
					{
						style:'cutPaperCustomer',
						text:"\n(สำหรับลูกค้า"
					},
				]
			},
			{
				columns:[
					{
						style:'cutPaper',
						text:"\n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
					},
				]
			},
			{
				columns:[
					{
						style:'cutPaper',
						text:"\n(สำหรับเจ้าหน้าที่)"
					},
				]
			},
			
			//*********************************************************** 4 Signature and employee bank service**************************************************************** */
			{ text :	"ช่องทางการชำระเงินที่เคาน์เตอร์สาขาธนาคาร (ค่าธรรมเนียมไม่เกิน 20 บาท)" ,margin:[0,10,0,0] },
			{
				style:'bankingServiceSupport',
				columns: [
					{
						width: 25,
						text: '\uf046  '
					},
					{
						width: 200,
						text: 'ธนาคารที่ให้บริการชำระบิล'
					},
					{
						width: 15,
						image:  `${encodeAllImg[0]}`,
						margin:[0,0,0,0]

					},
					{
						width: 15,
						image: `${encodeAllImg[1]}`,
						margin:[5,0,10,0]
					},
					{
						width: 15,
						image: `${encodeAllImg[2]}`,
						margin:[10,0,0,0]
					},
				],
			},
			{ text :	"ช่องทางอิเล็กทรอนิกส์ ATM, Internetm Mobile Banking (ค่าธรรมเนียมไม่เกิน 5 บาท)" },
			{
				style:'bankingServiceSupport',
				columns: [
					{
						width: 25,
						text: '\uf046  '
					},
					{
						width: 200,
						text: 'ธนาคารที่ให้บริการชำระบิล'
					},
					{
						width: 15,
						image: `${encodeAllImg[4]}`,
						margin:[0,0,0,0]
					},
					{
						width: 15,
						image: `${encodeAllImg[7]}`,
						margin:[5,0,0,0]
					},
					{
						width: 15,
						image: `${encodeAllImg[3]}`,
						margin:[10,0,0,0]
					},
					{
						width: 15,
						image: `${encodeAllImg[2]}`,
						margin:[15,0,0,0]
					},
					{
						width: 15,
						image: `${encodeAllImg[0]}`,
						margin:[20,0,0,0]
					},
					{
						width: 15,
						image: `${encodeAllImg[1]}`,
						margin:[25,0,0,0]
					},
					{
						width: 15,
						image: `${encodeAllImg[5]}`,
						margin:[30,0,0,0]
					},
					{
						width: 15,
						image: `${encodeAllImg[6]}`,
						margin:[35,0,0,0]
					},
				],
			},
			
			



			//*********************************************************** 5 Signature and employee bank service**************************************************************** */
			{
				style:'tableExample',
				table:{
					headerRows:1,
					widths: [118, 160, 50, 200],//colspan 4  (1  1 1 1)
					body:[
						[
							//colspan1
							{
								columns:[
									{
										text:"รับเฉพาะเงินสดเท่านั้น",
										alignment:"left",
									}
								]
							},
							//colspan2
							{
								columns:[
									{
										text:"จำนวนเงิน(บาท) / Amount(Bath)",
										alignment:"left"
									}
								]
							},
							//colspan1
							{
								columns:[
									{
										text:`${productListPayment.xxx_paymentTotal}`,
										alignment:"right"
									}
								]
							},
							//colspan1
							{
								columns:[
									{
										text:"สำหรับเจ้าหน้าที่",
										alignment:"left"
									}
								]
							},
						],
						[
							//colspan1
							{
								columns: [
									[
										{
											text: 'จำนวนเงินเป็นตัวอักษร',
											style: [{alignment: 'center'}],
											width: 200 // Nothing changes..
										},
										{
											columns: [
												{
													text: 'Amount in words',
													width: '*',
													style: [{ alignment: 'center'}],
												}
											]
										}
									]
								]
								
							},
							//colspan2
							{
								colSpan:2,
								columns:[
									{
										text: `\n${productListPayment.xxx_paymentTotalThai}`,
										style: [{bold: true, alignment: 'center' }],
										width: 200 // Nothing changes..
									},
									
								]
							},
							//colspan1
							{
								columns:[
									{
										text:`${productListPayment.xxx_paymentTotal}`,
										alignment:"right"
									}
								],

							},
							//colspan1
							{
								text:"\nลงชื่อ...................................................."
							},
						]
					]
				}
			},


			//**************************************************************** 6 Owner Bill Signature ************************************************************************** */
			{
				style:'tableExample',
				table:{
					headerRows:1,
					width:["*"],
					body:[
						[
							{
								text:"ชื่อผู้นำฝาก / Deposit By.............................................................................................  โทรศัพท์ / Telephone................................................"
							}
						]
					],
					// style:[{margin:20}]
				}
			},



			//**************************************************************** 7 QR - BarCode ************************************************************************** */
			{
				margin:[0,5,0,0],
				table:{
					headerRows:1,
					width:[250,"*"],
					body:
					[
						[
							{
								border:[false,false,false,false],
								columns : [
										{
											image:`${encodeQRCode}`,
											width: 50,
											alignment: "left",
										},
										{
											margin:[7,15,0,0],
											text:"ชำระได้ทุกธนาคาร"
										},{},{}
								],
							},
							{
								border:[false,false,false,false],
								columns : [
									[
										{
											text: "BarCode Image",
											alignment:"right"
										}
									]
									
								],
							}
						],
					]
				
				}
			},

		
		],
		styles: {
			itemProductDetail: {
				fontSize: 8,
			},
			cutPaperCustomer: {
				fontSize: 6,
				margin: [-5,0, -5,-3],
			},
			cutPaper: {
				fontSize: 6,
				margin: [-5,-16, -5,0],
			},
		
			subheader: {
				fontSize: 16,
				bold: true,
				margin: [0, 10, 0, 5]
			},
			tableExample: {
				margin: [0, 5, 0, 7],
				
			},
			tableHeader: {
				bold: true,
				fontSize: 13,
				color: 'black'
			},
			bankingServiceSupport:{
				margin: [30, 0, 20, 0],
			},
			checkBox: {
				color: "#656565",
				width:10
			},
			marginBankLogo:{
				margin: [15, 0,15, 0],
			}
		},
		defaultStyle: {
			font: "Sarabun",
			fontSize: 10,
		},
		pageSize: "A4",
		pageOrientation: "portrait",
		// margin: [left, top, right, bottom]
		pageMargins: [15, 5, 15, 5],
		images: {
			logoSiamsmile: siamsmile,
			logoKiatKun :kiatKun,
			logoThanachad : thanaChad,
			logoKTB :ktbBank,
			logoSCB : scbBank,
			logoK : kBank,
			logoAomsin : aomsinBank,
			logoTMB : tmbBank,
			logoBualuang:bualuangBank,
			waterMarkImg: waterMark,
			qrCode:qrCode
		},
	};
	// pdfMake.fonts = {
	// 	Fontello: {
	// 		normal: 'fontello.ttf',
	// 		bold: 'fontello.ttf',
	// 		italics: 'fontello.ttf',
	// 		bolditalics: 'fontello.ttf'
	// 	}
	// }
	
	pdfMake.createPdf(docDefinition).open();

};

