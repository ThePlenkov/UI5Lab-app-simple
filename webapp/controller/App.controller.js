sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Component",
	"sap/ui/core/ComponentContainer"
], function (Controller, JSONModel, Component, ComponentContainer) {
	"use strict";

	return Controller.extend("ui5lab.app.GeometryApp.controller.App", {

		onInit: function () {},

		async onLoadPress () {
			const oComponent = await Component.load({name: "ui5lab.app.GeometryApp.child1" });
			const oComponentContainer = new ComponentContainer({ component: oComponent });

			// ...
		}
	});
});