/*##############################################################
  ############[          Imported Modules           ]########### 
  ############################################################## */
// import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OmdbServices } from '../../services/omdb.service.client';


@Component({
  selector: 'app-omdbtest',
  templateUrl: './omdbtest.component.html',
  styleUrls: ['./omdbtest.component.css']
})
export class OmdbtestComponent implements OnInit {

	title: string;

	@ViewChild('f') searchForm : NgForm;



  constructor() { }

  ngOnInit() {
  }


  search() {
  	// Getting the input from the User
  	this.title = this.searchForm.value.title;
  	

  	// sent something to the Server

  }

} /*[END]*/
