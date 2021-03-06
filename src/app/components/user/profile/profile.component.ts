

import { UserServices } from '../../../services/user.service.client';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../models/user.models.client';
import { ActivatedRoute, Router } from '@angular/router';
import { WebsiteServices } from '../../../services/website.service.client';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../../services/shared.service.client';


@Component
	({
	  selector: 		'app-profile',
	  templateUrl: 		'./profile.component.html',
	  styleUrls: 	   ['./profile.component.css']
	})




/*##############################################################
  ############[                CLASS                ]########### 
  ############################################################## */
export class ProfileComponent implements OnInit {


	 @ViewChild('f') profileForm;

	// [ Varables ]_____________
		// user: 			User;
		uid:			string;
		username: string ='1';
  		email: string = '1';
  		firstName: string ='1';
  		lastName: string = '1';
		// username: 		string;
		// email: 			string;
		// firstName: 		string;
		// lastName:		string;
		oldUsername:	string;
		usernameTaken:	boolean;
		submitSuccess:	boolean;
		aUser: 			User;
		user: 			User = 
				{
					// _id: 		'',
					username:	'',
					password: 	'',
					firstName:	'',
					lastName:	'',
					email:		''
				};


  constructor(	private activatedRoute: ActivatedRoute,
   				private userService: 	UserServices,
   				private sharedService:  SharedService,
   				private router :		Router
   				) { }


  ngOnInit() 
	  {
	  	this.usernameTaken =	false;
		this.submitSuccess =	false;
		
		this.user = this.sharedService.user;
			this.uid 			= this.user._id;
			this.username 		= this.user.username;
			this.email	 		= this.user.email;
			this.firstName 		= this.user.firstName;
			this.lastName 		= this.user.lastName;
			this.oldUsername 	= this.user.username;
	  }



	update()
		{
			this.username 	= this.profileForm.value.username;
			this.email 		= this.profileForm.value.email;
			this.firstName 	= this.profileForm.value.firstName;
			this.lastName 	= this.profileForm.lastname;

			this.userService.findUserByUserName(this.username)
				.subscribe(
					( user: User) => {
						this.aUser = user;
					});

			if (this.aUser && this.oldUsername !== this.username)
				{
					this.usernameTaken = true;
					this.submitSuccess = false;
				}
			else
				{
					const updatedUser: User = 
						{
							_id: 		this.user._id,
							username: 	this.username,
							password: 	this.user.password,
							firstName: 	this.firstName,
							lastName: 	this.lastName,
							email: 		this.email
						};
					this.userService.updateUser(this.user._id, updatedUser)
					   .subscribe(
					   		(user2: User) =>{
					   			this.usernameTaken = false;
								this.submitSuccess = true;
					   		});
				}

		}

		logout() {
		    this.userService.logout().subscribe(
		      (data: any) => {
		        this.router.navigate(['/login'])
		      }
		   );

		}

		
}	/* [END OF CLASS] */
