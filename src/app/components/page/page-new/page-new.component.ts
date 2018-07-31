/*##############################################################
  ############[          Imported Modules           ]########### 
  ############################################################## */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../models/pages.models.client'
import { PageServices } from '../../../services/page.service.client'
import { NgForm } from "@angular/forms"




@Component
  ({
    selector:       'app-page-new',
    templateUrl:    './page-new.component.html',
    styleUrls:     ['./page-new.component.css']
  })


/*##############################################################
  ############[                Class                ]########### 
  ############################################################## */
export class PageNewComponent implements OnInit {
  

  @ViewChild('f') pageForm: NgForm;

    uid:           string;
    wid:           string;
    name:          string;
    description:   string;

  constructor(  private pageService:      PageServices, 
                private activatedRoute:   ActivatedRoute, 
                private router:           Router) { }


  ngOnInit() 
      {
      	this.activatedRoute.params.subscribe(
          params =>
              {
            		this.uid = params['uid'];
            		this.wid = params['wid'];
          	  });
      }



  create()
      {
      	this.name = this.pageForm.value.name;
      	this.description = this.pageForm.value.description;

      	const newPage: Page = 
            {
              	// _id:         "",
            		name:        this.name,
            		websiteId:   this.wid,
            		description: this.description
          	}

      	this.pageService.createPage(this.wid, newPage).subscribe(
          (page: Page)=>{
            this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
          });
     	
      }




} /* [ END OF CLASS ] */