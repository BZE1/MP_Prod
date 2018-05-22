
import { Injectable } from '@angular/core';
import {Pages} 		from '../models/pages.models.client'


// injecting Services into modules
@Injectable()

export class PageServices {

	constructor(){
		
// 							/* =======================================
// 							     CHANGE THESE NAMES AND PASSWORDS 
// 							   =======================================*/
	}

	pages : Pages[] = [		
				{_id: "321",name: "Post 1", websiteId: "456", description: "lorem"},
				{_id: "432",name: "Post 2", websiteId: "456", description: "lorem"},
				{_id: "543",name: "Post 3", websiteId: "456", description: "lorem"}
			]

	// api = {
	// 			'createPage' 		:  this.createPage,
	// 			// 'findPageByWebsite' :  this.findPageByWebsite,
	// 			'findPageById' 		:  this.findPageById,
	// 			'updatePage' 		:  this.updatePage,
	// 			'deletePage' 		:  this.deletePage,
	// 		};


		createPage(websiteId: string, page:Pages){
				page._id = Math.floor(Math.random() + 10000).toString();
				page.websiteId = websiteId;
				this.pages.push(page);
				return page;
			}

		findPageByWebsiteId(websiteId: string){
				let result = [];
				for (let i = 0; i < this.pages.length; i++)
				{
					if (this.pages[i].websiteId === websiteId)
					{
						result.push(this.pages[i]);
					}

				}
				return result;

			}


		findPageById(pageId :string){
				for (let i = 0; i<this.pages.length;  i++)
				{
					if (this.pages[i]._id === pageId)
					{
						return this.pages[i]
					}
				}

			}


		updatePage(pageId :string, page:Pages){
				let oldPage = this.findPageById(pageId);
				const index = this.pages.indexOf(oldPage);
				this.pages[index].name = page.name;
				this.pages[index].description = page.description;

			}



		deletePage(pageId: string){
				let oldPage = this.findPageById(pageId);
				const index = this.pages.indexOf(oldPage);
				this.pages.splice(index, 1);
			}


 } // END PageService Function






// Export the routes as module providers

/*COMPILE                     [ERROR]
						/================/*/
// export const Services: ModuleWithProviders = PageServicesModule.forRoot(PageServices);
