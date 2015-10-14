angular.module('app', []);

angular.module('app').controller('appController', ['$scope', function ($scope) {
	$scope.export = function () {
		// http://www.f0nt.com/release/13-free-fonts-from-sipa/
		var fontDescriptors = {
	        saraban: {
	            normal: 'THSarabun.ttf',
	            bold: 'THSarabunB.ttf',
	            italics: 'THSarabunI.ttf',
	            bolditalics: 'THSarabunBI.ttf'
	        }
	    };

	    var docDefinition = {
	        content: 'This is an sample PDF printed with pdfMake ทดสอบ อ่ะ อิ อุ เอะ โอ ล่ะ ล๊ะ ความรักก็เช่นกัล ฤ หรือ อู ไม้ตาย ไม้ยมก เชี่ย เอี้ย น้ำ ไกล เปิด เจ็ดศักดิ์',
	        defaultStyle: {
	            font: 'saraban',
	            fontSize: 20,
	            bold: true,
	            italics: true
	        }
	    }
	    
	    pdfMake.fonts = fontDescriptors;
	    pdfMake.createPdf(docDefinition).download();
	};
}]);