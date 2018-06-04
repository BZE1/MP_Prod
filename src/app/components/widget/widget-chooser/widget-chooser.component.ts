
/*##############################################################
  ############[          Imported Modules           ]########### 
  ############################################################## */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Widget_Services } from '../../../services/widget.service.client'
import { Widget } from '../../../models/widget.models.client'

@Component({
  selector: 	'app-widget-chooser',
  templateUrl: 	'./widget-chooser.component.html',
  styleUrls:   ['./widget-chooser.component.css']
})




/*##############################################################
  ############[                CLASS                ]########### 
  ############################################################## */
export class WidgetChooserComponent implements OnInit {

	// ( VARABLES )
	uid: string;
  	wid: string;
 	pid: string;

  constructor(	private activatedRoute: ActivatedRoute, 
  				private widgetService:  Widget_Services, 
  				private router: 		Router) { }


  ngOnInit() {
  	this.activatedRoute.params.subscribe(
  		params=> 
		  	{
		  		this.uid = params['uid'];
		  		this.wid = params['wid'];
		  		this.pid = params['pid'];
		  	})
  }


	create(type)
		{
		  	const newWidget: Widget = 
			  	{
			  		_id: 		'',
			  		widgetType: type,
			  		pageId: 	this.pid
			  	}

		  	this.widgetService.createWidget(this.pid, newWidget);

		  	const wgid = this.widgetService.widgets[this.widgetService.widgets.length - 1]._id;

		  	this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', wgid]);
		 }

}
