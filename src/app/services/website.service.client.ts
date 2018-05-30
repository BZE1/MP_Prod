import { Injectable } from '@angular/core';
// import { ModuleWithProviders} from '@angular/core';
import {Website} from '../models/website.models.client'



// injecting Services into modules
@Injectable()

export class WebsiteServices {

	constructor(){}


	websites : Website[] = 
			[		
				{_id: "123",name: "Facebook", developerId: "456", description: "lorem"},
				{_id: "234",name: "Tweeter", developerId: "456", description: "lorem"},
				{_id: "456",name: "Gizmodo", developerId: "456", description: "lorem"},
				{_id: "890",name: "Go", developerId: "123", description: "lorem"},
				{_id: "567",name: "Tic Tac Toe", developerId: "123", description: "lorem"},
				{_id: "678",name: "Checkers", developerId: "123", description: "lorem"},
				{_id: "789",name: "Chess", developerId: "234", description: "lorem"},
			]



/************************************************************
 * comment for getting the JS Function working 
 * need more imput for files and JSON
 * 
 * @param {[function need improvement and organization]}
 * 
 *************************************************************/
 
		createWebsite(userId:string, website: Website)
			{
				website._id = Math.floor(Math.random() + 10000).toString();
				website.developerId = userId;
				this.websites.push(website);
				
				return website;
			}

		findWebsiteByUser(userId:string)
			{
				var result = [];

				for (let i = 0;i<this.websites.length;i++)
					{
						if (this.websites[i].developerId === userId)
							{
								result.push(this.websites[i]);
							}
						
					}
			}

		findWebsiteById(websiteId:string)
			{
				for(let i =0;i<this.websites.length;i++)
					{
						if(this.websites[i]._id === websiteId)
							{
								return this.websites[i];
							}
					}
			}

		updateWebsite(websiteId:string, website : Website )
			{
				var oldWeb = this.findWebsiteById(websiteId);
				var index = this.websites.indexOf(oldWeb);

				this.websites[index].name = website.name;
				this.websites[index].description = website.description;
			}

		deleteWebsite(websiteId:string)
			{
				var web = this.findWebsiteById(websiteId);
				var index = this.websites.indexOf(web);

				this.websites.splice(index, 1);
			}

		

 } ; // END WEBSITE-SERVICES FUNCTION




// Export the routes as module providers

// export const Services: ModuleWithProviders = WebsiteServicesModule.forRoot(WebsiteServices);
