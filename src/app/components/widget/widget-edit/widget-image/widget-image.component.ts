import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Widget_Services } from "../../../../services/widget.service.client"
import { Widget } from "../../../../models/widget.models.client"
import { NgForm } from "@angular/forms";
import { environment }   from '../../../../../environments/environment';


@Component({
  selector: 	'app-widget-image',
  templateUrl: 	'./widget-image.component.html',
  styleUrls:   ['./widget-image.component.css']
})


export class WidgetImageComponent implements OnInit {

@ViewChild('f') widgetForm: NgForm;

	// (VARABLES)
	  baseUrl: string;
	  uid: 		string;
	  wid: 		string;
	  pid: 		string;
	  wgid: 	string;
	  name: 	string;
	  text: 	string;
	  url: 		string;
	  width: 	string;
	  widget: 	Widget = 
			 {
			 	// _id:		'',
			 	widgetType: '',
			 	pageId:		''
			  };


  constructor(	private widgetService: 	Widget_Services, 
  				private activatedRoute: ActivatedRoute, 
  				private router: 		Router) { }

  ngOnInit() {

  	this.baseUrl = environment.baseUrl;


    this.activatedRoute.params.subscribe(
    	params=>
    		{
		      this.uid 	= params['uid'];
		      this.wid	= params['wid'];
		      this.pid 	= params['pid'];
		      this.wgid = params['wgid'];

		      this.widgetService.findWidgetById(this.wgid).subscribe(
		      	(widget: Widget)=> {
		      		this.widget = widget;
		      	});
   			 });
  }



  remove() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
    	(widgets: Widget[])=> {
    		this.router.navigate(
    	['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    	})
  }

  update() 
	  {
	    this.name	= this.widgetForm.value.name;
	    this.text 	= this.widgetForm.value.text;
	    this.url 	= this.widgetForm.value.url;
	    this.width 	= this.widgetForm.value.width;

	    const updatedWidget: Widget = 
		    {
			      _id: 			this.wgid,
			      name: 		this.name,
			      text: 		this.text,
			      url: 			this.url,
			      width: 		this.width,
			      pageId: 		this.pid,
			      widgetType:   this.widget.widgetType
		    }

    this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(
    	(widget:Widget)=> {
    		this.router.navigate(
    	['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    	});
   
  }


} /*[END]*/
