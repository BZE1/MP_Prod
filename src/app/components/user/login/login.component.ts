/**
############################################
______________[   TODO :   ]________________

 
#############################################
 */




/*##############################################################
  ############[          Imported Modules           ]########### 
  ############################################################## */
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServices } from '../../../services/user.service.client';
import { User } from '../../../models/user.models.client';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/*##############################################################
  ############[                CLASS                ]########### 
  ############################################################## */
export class LoginComponent implements OnInit {

		 @ViewChild('f') loginForm: NgForm;
		 
		username:	string;
		password: 	string;
		errorFlag: 	boolean;

	  constructor(  private userServices: 	UserServices,
	  		 		private router:			Router ) { }

	  ngOnInit() {}



	  Login()
		  {
		  	this.username = this.loginForm.value.username;
		  	this.password = this.loginForm.value.password;
		  	this.userServices.findUserByCredentials(this.username,this.password).subscribe(
		  			(user: User) => {
		  				this.errorFlag = false;
			  			this.router.navigate(['user', user._id]);
		  			},
		  			(error:any) =>{
		  				this.errorFlag = true;
		  			}
		  		)
	  	
		  }


}  /* [ END OF CLASS ]*/
