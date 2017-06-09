import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ResourceNotFoundComponent } from './404/not.found.component';
import { PostsService } from './posts.service';

// Define the routes
const appRoutes: Routes = [
  { path: 'elements', component: PostsComponent },
  {path: '', component: PostsComponent},
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: ResourceNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ResourceNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), // Add routes to the app
    NgbModule.forRoot()
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
