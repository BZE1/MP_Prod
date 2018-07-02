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
    // _id:            string;
		username: 		  string;
		password: 		  string;
		verifyPassword: string;
		passwordError: 	boolean;
		usernameError: 	boolean;


  	constructor(private userService: 	UserServices, 
  				private router: 		Router) { }


	 /* [_NG_ON_INIT FUNCTION_] */
  	ngOnInit() 
	  	{
	  		this.passwordError = 	false;
			  this.usernameError = 	false;
	  	}

	register(){
    this.ngOnInit();
  	this.username = this.registerForm.value.username;
  	this.password = this.registerForm.value.password;

  	this.verifyPassword = this.registerForm.value.verifyPassword;
    
    if(this.password !== this.verifyPassword) {
        this.passwordError = true;
    } 

    else {
        this.passwordError = false;
        this.userService.findUserByUserName(this.username).subscribe(
        	(data: any) => {
                if(!data) {
                    const newUser: User = {
                    username: this.username,
                    password: this.password,
                    firstName: "",
                    lastName: "",
                    email: ""
                };
                this.userService.createUser(newUser).subscribe(
                    (user: User) => {
                        var id = user._id;
                        this.router.navigate(['user', id]);
                    },
                    (error: any) => {
                        this.usernameError = true;
                    }
                );
                } else {
                    this.usernameError = true;
                }
          })
      }
  }
		
          


}  /* [___________________END OF CLASS_______________________]*/
