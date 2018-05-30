/*##############################################################
  ############[          Imported Modules           ]########### 
  ############################################################## */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pages } from '../../../models/pages.models.client'
import { PageServices } from '../../../services/page.service.client'


@Component
	({
	  selector: 	'app-page-list',
	  templateUrl: 	'./page-list.component.html',
	  styleUrls:   ['./page-list.component.css']
	})



/*##############################################################
  ############[                ClASS                ]########### 
  ############################################################## */
export class PageListComponent implements OnInit {

	  uid: 		string;
	  wid: 		string;
	  pages: 	Pages[];

  constructor(	private pageService: 	PageServices, 
  				private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
	  {
	  	this.activatedRoute.params.subscribe(
	  	   params =>
		  	{
		  		this.uid = params['uid'];
		  		this.wid = params['wid'];
		  		this.pages = this.pageService.findPageByWebsiteId(this.wid);
		  	});
	  }

}