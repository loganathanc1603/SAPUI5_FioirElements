jQuery.sap.declare("Products.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("Products.Component", {
	metadata: {
		"manifest": "json"
	}
});