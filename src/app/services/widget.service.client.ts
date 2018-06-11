
import { Injectable } from '@angular/core';
import {Widget} from '../models/widget.models.client'
import { map } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment'

// injecting Services into modules
@Injectable()



/*		########################################################
		#############[    Widget_Services   Class  ]############
		########################################################*/
export class Widget_Services {

	baseUrl = environment.baseUrl;

    constructor(private http: Http) { }

	
	// widgets : Widget [] = 
	// 	[		
	// 		  { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
	// 		  { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
	// 		  { _id: "345", widgetType: "IMAGE", pageId: "321", width: "80%", url: "http://lorempixel.com/400/200/"},
	// 		  { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
	// 		  { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
	// 		  { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "80%", url: "https://youtu.be/AM2Ivdi9c4E" },
	// 		  { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
	// 	]



		createWidget(pageId: string, widget:Widget)
			{
				const url = this.baseUrl + '/api/page/' + pageId + '/widget';
				return this.http.post(url, widget).pipe(map(
					(response: Response) => {
						return response.json();
					}
				));

				// widget._id = Math.floor(Math.random() + 10000).toString();
				// widget.pageId = pageId;
				// this.widgets.push(widget);
				// return widget;
			}

		findWidgetByPageId(pageId:string)
			{
				const url = this.baseUrl + '/api/page/'+ pageId +'/widget'
				return this.http.get(url).pipe(map(
					(response: Response) => {
						return response.json();
					}
				));
			// 		var result = [];
			// 		for (var i = 0 ; i<this.widgets.length ; i++)
			// 			{
			// 				if (this.widgets[i].pageId === pageId)
			// 					{
			// 						result.push(this.widgets[i]);
			// 					}
			// 			}
			// return result;
		}

		findWidgetById(widgetId: string)
			{
				const url = this.baseUrl + '/api/widget/'+ widgetId
				return this.http.get(url).pipe(map(
					(response: Response) => {
						return response.json();
					}
				));

				// for(var i = 0; i<this.widgets.length; i++)
				// 	{
				// 		if(this.widgets[i]._id === widgetId)
				// 			{
				// 				return this.widgets[i];
				// 			}
				// 	}
			}


		updateWidget(widgetId: string, widget:Widget)
				{
					const url = this.baseUrl + '/api/widget/' + widgetId;
					return this.http.put(url, widget).pipe(map(
						(response: Response) => {
							return response.json();
						}
					));
					// const oldWidget = this.findWidgetById(widgetId);
					// const index = this.widgets.indexOf(oldWidget);

					// /* [_______Compile issue here___________] */
					// this.widgets[index].size 	= widget.size;
					// this.widgets[index].text 	= widget.text;
					// this.widgets[index].width 	= widget.width;
					// this.widgets[index].url 	= widget.url;
					
				}



		deleteWidget(widgetId:string){
				const url = this.baseUrl + '/api/widget/' + widgetId;
				return this.http.delete(url).pipe(map(
					(response: Response) => {
						return response.json();
					}
				));
				// const oldWidget = this.findWidgetById(widgetId);
				// const index = this.widgets.indexOf(oldWidget);

				// this.widgets.splice(index,1);
			}


 } // [END]   Widget_Services Function




