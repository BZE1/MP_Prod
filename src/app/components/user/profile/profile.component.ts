
/**
############################################
______________[   TODO :   ]________________

[_]  Users
  		-Imported
    	-Do I need to put it in the constructure

[_]  userService
		var nopt working 
		what going on with this one

[_]  View Child
		#F used in HTML code
		
[_]  findUserByUsername

[_]  updatedUser


#############################################
 */

import { UserServices } from '../../../services/user.service.client'
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.models.client'
import  { ActivatedRoute } from '@angular/router'
import { WebsiteServices } from '../../../services/website.service.client'


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


	// [ Varables ]_____________
		uid:			string;
		user: 			User;
		username: 		string;
		email: 			string;
		firstName: 		string;
		lastName:		string;
		oldUsername:	string;
		usernameTaken:	boolean;
		submitSuccess:	boolean;


  constructor(	private activatedRoute: ActivatedRoute,
   				private userService: UserServices,
   				private user: User) { }


  ngOnInit() 
	  {
	  	this.activatedRoute.params.subscribe
	  		(
	  			params => 
	  			{
	  				this.uid 			= params['uid'];
	  				this.user 			= this.userService.findUserById(this.uid);
	  				this.username 		= this.user.username;
	  				this.email	 		= this.user.email;
	  				this.firstName 		= this.user.firstName;
	  				this.lastName 		= this.user.lastName;
	  				this.oldUsername 	= this.user.username;
	  			}
	  		)

	  }

	update()
		{
			this.username 	= this.profileForm.value.username;
			this.email 		= this.profileForm.value.email;
			this.firstName 	= this.profileForm.value.firstName;
			this.lastName 	= this.profileForm.lastname;

			const aUser: User = this.userService.findUserByUsername(this.username);

			if (aUser && this.oldUsername !== this.username)
				{
					this.usernameTaken = true;
					this.submitSuccess = false;
				}
			else
				{
					const updaterUser: User = 
						{
							_id: 		this.user._id,
							username: 	this.username,
							password: 	this.user.password,
							firstName: 	this.firstName,
							lastName: 	this.lastName,
							email: 		this.email
						};

					this.userService.updateUser(this.uid, updatedUser);
					this.usernameTaken = false;
					this.submitSuccess = true;

				}

		}

}	/* [END OF CLASS]
