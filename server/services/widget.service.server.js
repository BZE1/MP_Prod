module.exports = function(app){

	/*____________________[ New API code ]____________________________*/
	var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: './dist/assets/uploads' });
    /*                     Loc where the file will be saved     */
    /*_________________________________________________________________*/
    var widgetModel = require("../model/widget/widget.model.server");


	// widgets = [
 //  		{ _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
 //  		{ _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
 //  		{ _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.w3schools.com/w3css/img_lights.jpg"},
 //  		{ _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
 //  		{ _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
 //  		{ _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
 //  		{ _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
	// ];

	app.post ('/api/page/:pid/widget',createWidget);
	app.get ('/api/page/:pid/widget',findAllWidgetsForPage);
	app.get ('/api/widget/:wgid',findWidgetsById);
	app.put ('/api/widget/:wgid',updateWidget);
	app.delete ('/api/widget/:wgid',deleteWidget);
	// app.post("/api/user/:uid/website/:wid/page/:pid/widget:wgid/upload", upload.single('myfile'), uploadImage);

	/*____________________[ New API code ]____________________________*/
	app.post('/api/user/:uid/website/:wid/page/:pid/widget/:wgid/upload',
			       upload.single('myFile'), uploadImage);
	
	/*_________________________________________________________________*/


	function uploadImage (req,res) {
		const uid = 	req.params['uid'];
		const wid = 	req.params['wid'];
		const pid = 	req.params['pid'];
		const wgid = 	req.params['wgid'];

		var myfile = req.file;
		widget = widgetModel.findWidgetById(wgid).then(
        	(widget) => {
        		widget.url = '/assets/uploads/'+myFile.filename;
        		widgetModel.updateWidget(wgid, widget).then(
        			(data) => {
        				var callbackUrl = req.headers.origin + "/user/" + uid + "/website/" + wid + "/page/" + pid + "/widget/" + wgid;
        				res.redirect(callbackUrl);
        			}
        		);
        	}
        );

	}




	function createWidget (req, res) {
		const widget = req.body;
		widgetModel.createWidget(widget).then(
			widget => {
				res.json(widget);
			}
		);
	}


	function findAllWidgetsForPage (req, res) {
		const pid = req.params['pid'];
		widgetModel.findAllWidgetsForPage(pid).then(
			(widgets) => {
				res.json(widgets);
			}
		);
	}


	// function selectWidgetById(wgid) {
	// 	for (var i = 0 ; widgets.length ; i++) {
	// 		if (widgets[i]._id === wgid) {
	// 			return widgets[i];
	// 		}
	// 	}
	// }

	function findWidgetsById (req, res) {
		const wgid = req.params['wgid']
		widgetModel.findWidgetById(wgid).then(
			widget => {
				res.json(widget);
			}
		);
	}


	function updateWidget (req, res) {
		const wgid = req.params['wgid'];
		const widget = req.body;
		widgetModel.updateWidget(wgid, widget).then(
			data => {
				res.json(data);
			}
		);
	}


	function deleteWidget (req, res) {
		const wgid = req.params['wgid'];
		widgetModel.deleteWidget(wgid).then(
			data => {
				res.json(data);
			}
		);
	}



	/*____________________[ New API code ]____________________________*/
	 function uploadImage(req, res) {

        const uid = req.params['uid'];
        const wid = req.params['wid'];
        const pid = req.params['pid'];
        const wgid = req.params['wgid'];
        var myFile = req.file;

       widget = widgetModel.findWidgetById(wgid).then(
        	(widget) => {
        		widget.url = '/assets/uploads/'+myFile.filename;
        		widgetModel.updateWidget(wgid, widget).then(
        			(data) => {
        				var callbackUrl = req.headers.origin + "/user/" + uid + "/website/" + wid + "/page/" + pid + "/widget/" + wgid;
        				res.redirect(callbackUrl);
        			}
        		);
        	}
        );
    }/*_________________________________________________________________*/
  





} 