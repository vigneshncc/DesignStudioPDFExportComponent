sap.designstudio.sdk.PropertyPage.subclass("com.ac.pdfexport.PdfexportPropertyPage",  function() {

	var that = this;

	this.init = function() {
		$("#select").change(function() {
			that.firePropertiesChanged(["pdfMethod"]);
			return false;
		});
	};

	this.pdfMethod = function(value) {
		if (value === undefined) {
			return $("#select").val();
		}
		else {
			return $("#select").val();
		}
	};
});