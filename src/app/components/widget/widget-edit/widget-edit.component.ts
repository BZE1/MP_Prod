/*	########################################################
	##########[        Imported   Modules         ]#########
	########################################################  */
import { Component, OnInit } from '@angular/core';
import { Widget } from '../../../models/widget.models.client';
import { Widget_Services } from '../../../services/widget.service.client';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})


/*
########################################################
##########[               Class               ]#########
######################################################## */
export class WidgetEditComponent implements OnInit {

	  constructor (	private widgetService:  Widget_Services, 
	  				private activatedRoute: ActivatedRoute) {}


	  //[ VARABLES ]___________ 	 	
	  		wgid: 	string;
	  		uid: 	string;
	  		// pid: 	string;
	  		// wid:	string;
			widget: Widget = 
				{
					_id: 		'',
					widgetType: '',
					pageId: 	''
				};


	  	ngOnInit() 
			  	{
			  	this.activatedRoute.params.subscribe(
			  		params => 
				  		{
					  		this.wgid = params['wgid'];
					  		// this.uid = params['uid'];
					  		// this.pid = params['pid'];
					  		// this.wid = params['wid'];
					  		this.widgetService.findWidgetById(this.wgid).subscribe(
					  			(widget: Widget)=> {
					  				this.widget = widget;
					  			});
				  		})
			  	}




 } /*  ##########################[END OF CLASS]#######################  */
