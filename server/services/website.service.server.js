module.exports = function(app){

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

	function findWebsiteById(req, res){
		var wid = req.params['wid'];
		websiteModel.findWebsiteById(wid).then(
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


