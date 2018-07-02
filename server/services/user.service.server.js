module.exports = function(app){

	 // var users = 
		// 	[
		// 		{_id: "123",username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
		// 		{_id: "234",username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
		// 		{_id: "345",username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
		// 		{_id: "456",username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.com"},
		// 		{_id: "000",username: "z", password: "z", firstName: "Mr Z", lastName: "Z", email: "MrZ@ulem.com"}
		// 	]

		app.get('/test', test);
		app.get('/api/user', findUser);
		app.get('/api/user/:uid', findUserById);
		app.post("/api/user", createUser);
		app.put('/api/user/:uid', updateUser);
		app.delete('/api/user/:uid', deleteUser);
		// app.get('/api/user', findUserByCredentials);
		
/*
=================================================
http://localhost:3100/test
http://localhost:3100/api/user

http://localhost:3100/api/user?username=alice&password=alice
http://localhost:3100/api/user?username=bob&password=bob

=================================================
*/

	function test(req, res){
					res.send("Test.... from [SERVER] !")
	}	

	// function selectUserbyId(uid){
	// 	for (let x = 0; x < users.length; x++) {
 //      		if (users[x]._id === uid) {  
 //        		return users[x]; 
 //        	}
 //      	}
	// }


	function findUser(req, res) 
	{
		const username = req.query['username'];
		const password = req.query['password'];

		if(username && password) 
		{
			var user;
			for (let x = 0; x < users.length; x++) 
				{
		      	   if (users[x].username === username && users[x].password === password) 
		      		{  
		             	user = users[x]
		      		}
	    		}
    		res.json(user);
    		return;
		}
		if(username) 
			{
			var user;
			user = users.find(function(user)
				{
					return user.username === username;
				})
			if(user) {
					res.json(user);
				} else {
					res.json(null);
				}
			return;
			}
		res.json(users);
	}


		
		
	function findUserById(req, res)
		{
		var uid = req.params["uid"];
		userModel.findUserById(uid).then(
			data => {
				res.json(data);
			}
		)
    }

	function createUser(req, res) {
		var user = req.body;
		userModel.createUser(user).then(
			(data) => {
				res.json(data);
			}
		)
	}

	function updateUser(req, res) {
		var uid = req.params['uid'];
		var user = req.body;
		userModel.updateUser(uid, user).then(
			data => {
				res.json(data);
			}
		);
	}

	function deleteUser(req, res) {
		var uid = req.parms["uid"];
		userModel.deleteUser(uid).then(
			data => {
				res.json(data);
			}
		);
	}




} /*##########[ END OF MODULE ]############*/