module.exports = function(app){

	/*( server data being used in functions )*/
	// websites  = 
	// 		[		
	// 			{_id: "123",name: "Facebook", developerId: "456", description: "lorem"},
	// 			{_id: "234",name: "Tweeter", developerId: "456", description: "lorem"},
	// 			{_id: "456",name: "Gizmodo", developerId: "456", description: "lorem"},
	// 			{_id: "890",name: "Go", developerId: "123", description: "lorem"},
	// 			{_id: "567",name: "Tic Tac Toe", developerId: "123", description: "lorem"},
	// 			{_id: "678",name: "Checkers", developerId: "123", description: "lorem"},
	// 			{_id: "789",name: "Chess", developerId: "234", description: "lorem"},
	// 		]


	var websiteModel = require('../model/website/website.model.server.js');

	/** Calls from the Client side */
	app.post	("/api/user/:uid/website",  createWebsite);
	app.get		("/api/user/:uid/website",  findAllWebsitesForUser);
	app.get		("/api/website/:wid", 		findWebsiteById);
	app.put		("/api/website/:wid", 		updateWebsite);
	app.delete	("/api/website/:wid", 		deleteWebsite);


	function createWebsite(req, res){
		var website = req.body;
		// var uid = req.params['uid'];
		websiteModel.createWebsiteForUser (website).then(
			(date) => {
					res.json(date);
			});
		
		
	}


	function findAllWebsitesForUser(req, res){
		var uid = req.params['uid'];
		websiteModel.findAllWebsitesForUser(uid).then(
			(websites) => {
					res.json(websites);
			});
	}



	/*( Helper Function______________________________ )*/
	// function selectWebsiteById(wid){
	// 	for (let i = 0 ; i < websites.length ; i++){
	// 		if(websites[i]._id === wid){
	// 			return websites[i];
	// 		}
	// 	}
	// }
	/*(_______________________________________________)*/



	function findWebsiteById(req, res){
		var wid = req.params['wid'];
		websiteModel.findWebsitesById(wid).then(
			(website) => {
				res.json(website);
			});
	}

	function updateWebsite(req, res){
		var wid = req.params['wid'];
		var website = req.body;
		websiteModel.updateWebsite(wid, website).then(
			(date) => {
				res.json(date);

			});
	}



	function deleteWebsite(req, res){
		var wid = req.params['wid'];
		websiteModel.deleteWebsite(wid).then(
			(data)=> {
				res.json(data);
			});
	}




} /*[END]*/


