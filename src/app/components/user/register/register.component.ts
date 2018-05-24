import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserServices } from '../../../services/user.service.client'
import { User } from '../../../models/user.models.client'
import { Router } from '@angular/router'



@Component({
	  selector: 	'app-register',
	  templateUrl: 	'./register.component.html',
	  styleUrls: 	['./register.component.css']
	})


export class RegisterComponent implements OnInit 
{


	@ViewChild('f') registerForm: NgForm;


	 /* [_VARABLES USED IN CLASS_] */
		username: 		string;
		password: 		string;
		verifyPassword: string;
		passwordError: 	boolean;
		usernameError: 	boolean;


  	constructor(private userService: UserServices, 
  				private router: Router) { }


	 /* [_NG_ON_INIT FUNCTION_] */
  	ngOnInit() 
	  	{

	  	}

	 /* [_REGISTER FUNCTION_] */
	register()
	  	{
	  		this.username = this.registerForm.value.username;
	  		this.password = this.registerForm.value.password;
	  		this.verifyPassword = this.registerForm.value.verifyPassword;

	  		if(user)
		  		{
		  			this.usernameError = true;
		  		}
		  	else
			  	{
			  		this.usernameError = false;
			  		this.passwordError = false;

			  		const newUser: User = 
				  		{
				  			_id: "",
				  			username: this.username,
				  			password: this.password,
				  			firstName: "",
				  			lastName: "",
				  			email: "",
				  		}

				  	this.userService.createUser(newUser);
				  	var id: string = this.userService.findUserByUserName
				  	 	(this.username)._id
				  	 	this.router.navigate(['user', id]);

			  	}

	  	}



}  /* [___________________END OF CLASS_______________________]*/
