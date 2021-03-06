import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
// import { HttpModule } from '@angular/http';


// Other Modules__________________________________________________________

import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AppComponent }   from './app.component';

// ROUTING_______________________________________________________________

import { Routing } from './app.routing';

// SERVICES______________________________________________________________

import { UserServices }     from './services/user.service.client';
import { WebsiteServices }  from './services/website.service.client';
import { PageServices }     from './services/page.service.client';
import { Widget_Services }  from './services/widget.service.client';
import { OmdbServices }     from './services/omdb.service.client';
import { FlickrService }    from './services/flickr.service.client'
import { SharedService }    from './services/shared.service.client'

// WEB PAGE COMPONENTS________________________________________________________

import { LoginComponent }          from './components/user/login/login.component';
import { ProfileComponent }        from './components/user/profile/profile.component';
import { RegisterComponent }       from './components/user/register/register.component';
import { PageNewComponent }        from './components/page/page-new/page-new.component';
import { PageEditComponent }       from './components/page/page-edit/page-edit.component';
import { PageListComponent }       from './components/page/page-list/page-list.component';
import { WebsiteNewComponent }     from './components/website/website-new/website-new.component';
import { WebsiteEditComponent }    from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent }    from './components/website/website-list/website-list.component';
import { WidgetChooserComponent }  from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent }     from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent }     from './components/widget/widget-list/widget-list.component';
import { WidgetImageComponent }    from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent }  from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetHeaderComponent }   from './components/widget/widget-edit//widget-header/widget-header.component';

import { OmdbtestComponent }       from './components/omdbtest/omdbtest.component';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {AuthGuard} from './services/auth-guard.service';

@NgModule({
    declarations: 
            [
              AppComponent,
              LoginComponent,
              ProfileComponent,
              RegisterComponent,
              PageNewComponent,
              PageEditComponent,
              PageListComponent,
              WebsiteNewComponent,
              WebsiteEditComponent,
              WebsiteListComponent,
              WidgetChooserComponent,
              WidgetEditComponent,
              WidgetListComponent,
              WidgetImageComponent,
              WidgetYoutubeComponent,
              WidgetHeaderComponent,
              OmdbtestComponent,
              FlickrImageSearchComponent,
            ],

      imports: [
           BrowserModule,
           FormsModule,
           HttpModule,
           BrowserModule,
           Routing,
           HttpModule
      ],

      providers: [
              UserServices, 
              WebsiteServices, 
              PageServices,
              Widget_Services,
              OmdbServices,
              FlickrService,
              SharedService,
              AuthGuard
              ],

      bootstrap: [AppComponent]

})  // [END OF CLASS]

export class AppModule { }
