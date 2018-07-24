import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserServices} from './user.service.client';


@Injectable()

export class AuthGuard implements CanActivate {


		 constructor(private userService: UserServices, private router: Router) {}


		 canActivate() {
		   // return this.userService.loggedin();
		   return this.userService.loggedIn();
		 }

}