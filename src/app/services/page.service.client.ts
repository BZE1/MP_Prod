
import { Injectable } from '@angular/core';
import { Page } 		from '../models/pages.models.client'
import { map } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

// injecting Services into modules
@Injectable()

export class PageServices {

	baseUrl = environment.baseUrl;

	constructor(private http: Http){}

		
// 							/* =======================================
// 							     CHANGE THESE NAMES AND PASSWORDS 
// 							   =======================================*/
	

	// pages : Pages[] = 
	// 		[		
	// 			{_id: "321",name: "Post 1", websiteId: "456", description: "lorem"},
	// 			{_id: "432",name: "Post 2", websiteId: "456", description: "lorem"},
	// 			{_id: "543",name: "Post 3", websiteId: "456", description: "lorem"}
	// 		]


		createPage(websiteId: string, page:Page){
			const url = this.baseUrl + '/api/website/'+websiteId+'/page';
			console.log(url);
			return this.http.post(url, page).pipe(map(
				(response: Response) => {
					return response.json();
				}))
		}

			// {
			// 		page._id = Math.floor(Math.random() + 10000).toString();
			// 		page.websiteId = websiteId;
			// 		this.pages.push(page);
			// 	return page;
			// }





		findPageByWebsiteId(websiteId: string){
			const url = this.baseUrl+'/api/website/'+websiteId+'/page';
			return this.http.get(url).pipe(map(
				(response: Response) => {
					return response.json();
				}))
		}
			
			// {
			// 	let result = [];
			// 	for (let i = 0; i < this.pages.length; i++)
			// 	{
			// 		if (this.pages[i].websiteId === websiteId)
			// 		{
			// 			result.push(this.pages[i]);
			// 		}

			// 	}
			// 	return result;

			// }


		findPageById(pageId :string){
			const url = this.baseUrl + '/api/page/' + pageId;
			return this.http.get(url).pipe(map(
				(response: Response)=> {
					return response.json();
				}))
		}
			// {
			// 	for (let i = 0; i<this.pages.length;  i++)
			// 	{
			// 		if (this.pages[i]._id === pageId)
			// 		{
			// 			return this.pages[i];
			// 		}
			// 	}

			// }


		updatePage(pageId :string, page:Page){
			const url = this.baseUrl + '/api/page/' + pageId;
			return this.http.put(url, page).pipe(map(
				(response: Response)=> {
					return response.json();
				}));
		}
			// {
			// 	let oldPage = this.findPageById(pageId);
			// 	const index = this.pages.indexOf(oldPage);

			// 	this.pages[index].name 			= page.name;
			// 	this.pages[index].description 	= page.description;
			// }



		deletePage(pageId: string){
			const url = this.baseUrl +'/api/page/' + pageId;
			return this.http.delete(url).pipe(map(
				(response: Response)=>{
					return response.json();
				}))
		}
			// {
			// 	let oldPage = this.findPageById(pageId);
			// 	const index = this.pages.indexOf(oldPage);
				
			// 	this.pages.splice(index, 1);
			// }


 } // END PageService Function






// Export the routes as module providers

/*COMPILE                     [ERROR]
						/================/*/
// export const Services: ModuleWithProviders = PageServicesModule.forRoot(PageServices);
