
/*	########################################################
	##########[        Imported Modules           ]#########
	########################################################         */

import { Component, OnInit } from '@angular/core';
import { Widget_Services } from "../../../services/widget.service.client"
import { Widget } from "../../../models/widget.models.client"
import { ActivatedRoute } from "@angular/router"
import { DomSanitizer } from '@angular/platform-browser'


@Component
	({
	  selector: 	 'app-widget-list',
	  templateUrl: 	 './widget-list.component.html',
	  styleUrls: 	['./widget-list.component.css']
	})


/*	########################################################
	##########[               Class               ]#########
	########################################################         */
export class WidgetListComponent implements OnInit {

	// [ Varables ]
		  uid: 		string;
		  wid: 		string;
		  pid: 		string;
		  widgets:  Widget[];


	constructor(private widgetService:  Widget_Services, 
				private activatedRoute: ActivatedRoute, 
				private sanitizer: 		DomSanitizer   ) { }


  ngOnInit() 
	  {
	  	this.activatedRoute.params.subscribe(
	  		params => 
			  	{
			  		this.uid = params['uid'];
			  		this.wid = params['wid'];
			  		this.pid = params['pid'];

			  		this.widgetService.findWidgetByPageId(this.pid).subscribe(
			  			(widgets: Widget[])=> {
			  				this.widgets =widgets;
			  			});
			  		
			  	}  )
	  }


  getYoutubeUrl(url)
	  {
	  	let 	embedUrl = "https://www.youtube.com/embed/";
	  	const 	parsedUrl = url.split('/');

		embedUrl += parsedUrl[parsedUrl.length -1];
	  	
	  	return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
	  }




}/*  ###################[  END OF CLASS  ]###############  */
