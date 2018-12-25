import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatExpansionPanel } from '@angular/material';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { HeaderComponent } from './header/header.component';
import { ListPostComponent } from './list-post/list-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    HeaderComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
