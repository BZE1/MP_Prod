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
import { SharedService } from '../../../services/shared.service.client';



@Component({
  selector: 	'app-login',
  templateUrl:  './login.component.html',
  styleUrls:    ['./login.component.css']
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
	  		 		private router:			Router,
	  		 		private sharedService: SharedService ) { }

	  ngOnInit() {}



	  
		login() {
			 // fetching data from loginForm
			 this.username = this.loginForm.value.username;
			 this.password = this.loginForm.value.password;

			 // calling client side userservice to send login information
			 // console.log('data', this.username);

			 this.userServices.login(this.username, this.password)
				   .subscribe(
					    (user: User) => {
					    	if(!user){
					    		this.errorFlag = true;
					    	}
					    	else{
					    		this.errorFlag = false;
					    		this.sharedService.user = user;
					    		this.router.navigate(['user']);
					    	}
					    	
					    },
					    (error: any) => {
      						this.errorFlag = true;
     					}
				   );
		}


		  
	  	
		  


}  /* [ END OF CLASS ]*/
