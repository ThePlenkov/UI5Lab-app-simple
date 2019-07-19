sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	'sap/ui/model/BindingMode',
	'sap/viz/ui5/format/ChartFormatter',
	'sap/viz/ui5/api/env/Format'
], function (Controller, JSONModel, BindingMode, ChartFormatter, Format) {
	"use strict";

	return Controller.extend("ui5lab.app.GeometryApp.controller.App", {
		onInit: function () {
			var oViewModel = new JSONModel({
				size: 200
			});
			this.getView().setModel(oViewModel, "view");
			this.initChart();
		},

		initChart: function (evt) {
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;


			var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
			oVizFrame.setVizProperties({
				plotArea: {
					dataLabel: {
						formatString: formatPattern.SHORTFLOAT_MFD2,
						visible: true
					}
				},
				valueAxis: {
					label: {
						formatString: formatPattern.SHORTFLOAT
					},
					title: {
						visible: false
					}
				},
				categoryAxis: {
					title: {
						visible: false
					}
				},
				title: {
					visible: false,
					text: 'Revenue by City and Store Name'
				}
			});

			oVizFrame.setModel(new JSONModel({
				"milk": [{
						"Store Name": "Sample Store A",
						"Revenue": 428214.13,
						"Cost": 94383.52,
						"Consumption": 76855.15368
					},
					{
						"Store Name": "Sample Store B",
						"Revenue": 1722148.36,
						"Cost": 274735.17,
						"Consumption": 310292.22
					},
					{
						"Store Name": "Sample Store C",
						"Revenue": 1331176.706884,
						"Cost": 233160.58,
						"Consumption": 143432.18
					}
				]
			}));
			var oPopOver = this.getView().byId("idPopOver");
			oPopOver.connect(oVizFrame.getVizUid());
			oPopOver.setFormatString(formatPattern.STANDARDFLOAT);

		}
	});
});