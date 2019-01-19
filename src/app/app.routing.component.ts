import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// The classes which we imported from the modules of the app
import { ListPostComponent } from './list-post/list-post.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';

// List of the objects which we need to route. '' - core of the app.
const routes: Routes = [
   // the list of objects with the attributes such as path and a component
  { path: '', component: ListPostComponent },
  { path: 'create', component: CreatePostComponent }
];

@NgModule({
  // we did the export of the route module to the angular with the config routes
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingComponent {}
