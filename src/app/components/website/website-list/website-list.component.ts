import { Component, OnInit } from '@angular/core';
import { WebsiteServices } from '../../../services/website.service.client'
import { Website } from '../../../models/website.models.client'
import { ActivatedRoute } from '@angular/router'



@Component({
  selector:        'app-website-list',
  templateUrl:     './website-list.component.html',
  styleUrls:      ['./website-list.component.css']
})


export class WebsiteListComponent implements OnInit {

  uid:      string;
  websites: Website [];


  constructor(
  	private websiteServices: WebsiteServices,
  	private activatedRoute:  ActivatedRoute
  				) { }

  ngOnInit() 
    {
    	  this.activatedRoute.params.subscribe(
          params => 
            {
          		this.uid = params['uid'];
          		this.websiteServices.findWebsitesByUser(this.uid).subscribe(
                (websites: Website[]) => {
                  this.websites = websites;
                });
             })
  }

}  /* [ END OF CLASS ] */
