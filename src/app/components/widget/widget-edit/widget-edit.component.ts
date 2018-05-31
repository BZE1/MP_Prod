/*	########################################################
	##########[        Imported   Modules         ]#########
	########################################################  */
import { Component, OnInit } from '@angular/core';
import { Widget } from '../../../models/widget.models.client'
import { Widget_Services } from '../../../services/widget.service.client'
import { ActivatedRoute } from '@angular/router'



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

	  constructor (	private widgetService: Widget_Services, 
	  				private activatedRoute: ActivatedRoute) {}


	  //[ VARABLES ]___________
	 	 	widget: Widget;
	  		wgid: string;


	  	ngOnInit() 
			  	{
			  	this.activatedRoute.params.subscribe(
			  		params => 
				  		{
					  		this.wgid = params['wgid'];
					  		this.widget = this.widgetService.findWidgetById(this.wgid);
				  		})
			  	}




 } /*  ##########################[END OF CLASS]#######################  */
