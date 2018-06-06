import { map } from "rxjs/operators";
import { Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import { ModuleWithProviders} from '@angular/core';
import {User} from '../models/user.models.client'



@Injectable()

export class UserServices 
	{

		baseUrl = environment.baseUrl;

		constructor(private http: Http){

				}
		
		// users : User[] = 
		// 	[
		// 		{_id: "123",username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
		// 		{_id: "234",username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
		// 		{_id: "345",username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
		// 		{_id: "456",username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.com"}
		// 	]


			createUser(user:User)
				{
					// user._id = Math.floor(Math.random() + 10000).toString();
					// this.users.push(user);
					const url = this.baseUrl + '/api/user';
					return this.http.post(url, user).pipe(map(
						(response: Response) => {
							return response.json();
						}
						))
				}

			findUserById(userId :string)
				{
					const url = this.baseUrl + '/api/user/' + userId;

					return this.http.get(url).pipe(map(
						(response: Response) => {
							return response.json();
						}
						))


					// for (let x = 0 ; x < this.users.length ; x++)
					// 	{
					// 		if (this.users[x]._id === userId)
					// 			{
					// 				return this.users[x];
					// 			}
					// 	}
				}

			findUserByUserName (username: string)
				{
					const url = this.baseUrl + '/api/user?username=' + username;
					return this.http.get(url).pipe(map(
						(response: Response) =>{
							return response.json();
						}
					))


					// for (let x = 0; x < this.users.length; x++)
					// 	{
					// 		if (this.users[x].username === username)
					// 			{
					// 				return this.users[x];
					// 			}
					// 	}
				}

			findUserByCredentials (username: string , password: string){
				const url = this.baseUrl + '/api/user?username=' 
									+ username + '&password=' + password;
				
				return this.http.get(url).pipe(map(
					(response : Response) =>
					{
						
						 return response.json();
					}));
			}



	
			updateUser (userId:string, user:User)
				{
					const url = this.baseUrl + '/api/user'+ userId;
					return this.http.put(url, user).pipe(map(
						(response: Response) => {
							return response.json();
						}
						))


					// var oldUser = this.findUserById(userId);
					// var index = this.users.indexOf(oldUser);

					// this.users[index].username 		= user.username;
					// this.users[index].password 		= user.password;
					// this.users[index].firstName 	= user.firstName;
					// this.users[index].lastName 		= user.lastName;
					// this.users[index].email 		= user.email;

				}

			deleteUser (userId:string)
				{
					
				const url = this.baseUrl + '/api/user'+ userId;
					return this.http.delete(url).pipe(map(
						(response: Response) => {
							return response.json();
						}
					))

					// var oldUser = this.findUserById(userId);
					// var index = this.users.indexOf(oldUser);
					
					// this.users.splice(index, 1);
				}

	}  // END USER SERVICES FUNCTION




// Export the routes as module providers
// export const Services: ModuleWithProviders = ServicesModule.forRoot(UserServices);
