import { Injectable } from '@angular/core';
import { Page } 		from '../models/pages.models.client'
import { map } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';


// injecting Services into modules
@Injectable()

export class OmdbServices {


	constructor(private http: Http){
	}

	searchMovie (title: string) {

	}



}  /*[END]*/