module.exports = function(app){

	 var users = 
			[
				{_id: "123",username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
				{_id: "234",username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
				{_id: "345",username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
				{_id: "456",username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.com"},
				{_id: "000",username: "z", password: "z", firstName: "Mr Z", lastName: "Z", email: "MrZ@ulem.com"}
			]

		app.get('/test', test);
		app.get('/api/user', findUser);
		app.get('/api/user/:uid', findUserById);
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

	function selectUserbyId(uid){
		for (let x = 0; x < users.length; x++) {
      		if (users[x]._id === uid) {  
        		return users[x]; 
        	}
      	}
	}


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
			var user = users.find(function(user)
				{
					return user.username === username;
				})
			res.json(user);
			return;
			}
		res.json(users);
	}


		
		
	function findUserById(req, res)
		{
			var uid = req.params["uid"];
			var user = selectUserbyId(uid);
			res.json(user);
		}

	function createUser(req, res) {
		var user = req.body;
		user._id = Math.floor(Math.random() * 10000).toString();
    	users.push(user);
    	res.json(user);
	}

	function updateUser(req, res) {
		var uid = req.params['uid'];
		var user = req.body;
		var oldUser = selectUserbyId(uid);
    	var index = users.indexOf(oldUser);
    	users[index].username = user.username;
    	users[index].password = user.password;
    	users[index].firstName = user.firstName;
    	users[index].lastName = user.lastName;
    	users[index].email = user.email;
    	res.json(user);
	}

	function deleteUser(req, res) {
		var uid = req.parms["uid"];
		var oldUser = selectUserbyId(uid);
     	var index = this.users.indexOf(oldUser);
        this.users.splice(index, 1);
        res.json(users);
	}





} /*##########[ END OF MODULE ]############*/