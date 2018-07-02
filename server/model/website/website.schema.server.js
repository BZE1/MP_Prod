var mongoose = require('mongoose');

var WebsiteSchema = mongoose.Schema({
	name: 		 String,
	description: String,
	developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
	
	dateCreated: {type: Date, default: Date.now},
}, {collection: 'website'})

module.exports = WebsiteSchema;