sap.designstudio.sdk.Component.subclass("com.ac.pdfexport.PDFExport", function() {

	var that = this;
	var text = "Export PDF";
	var pdfMethod = 1;

	this.init = function() {
		this.button   = document.createElement("button");
		this.button.type = "button";
		this.button.innerHTML = text;
		
		
		this.$().append($(this.button));
	};

	//GETTERS AND SETTERS FOR VARIABLES
	this.text = function(value) {
		if (value == undefined) {
			return text;
		} else {
			text = value;
			return this;
		}
	};
	
	
	//GETTERS AND SETTERS FOR VARIABLES
	this.pdfMethod = function(value) {
		if (value == undefined) {
			return pdfMethod;
		} else {
			pdfMethod = value;
			return this;
		}
	};
	
	//FUNCTION CALLED AFTER RENDERING
	this.afterUpdate = function() {
		
		that.$().click(function() {
			that.fireEvent("onclick");
			var svgElements = $('body').find('svg');

			svgElements.each(function(){
				var svg = this;
				var img = document.createElement("img");
				img.className = "screenShotTempCanvas";
	
				svgAsDataUri(this,1,function(uri){

					svg.className = "tempHide";
					$(svg).hide();
					var parent = svg.parentNode;
					img.src=uri;
					parent.appendChild(img);

					img.onload = function(){

					};
	
				});
			});

			var pdf = new jsPDF('p','pt','a4');
			
			pdf.addHTML(document.body,function() {
				if(pdfMethod == 1){
					pdf.output('save','example.pdf');
				}else if(pdfMethod == 2){
					pdf.output('dataurlnewwindow');
				}else{
					pdf.output('datauri');
				}							
				$('body').find('.screenShotTempCanvas').remove();
	      		$('svg').show();

			});
				

			
		});
		that.button.innerHTML = text;

	};
	
});