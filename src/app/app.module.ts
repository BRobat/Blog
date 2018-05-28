import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CanvasComponent } from './canvas/canvas.component';
import { PublisherComponent } from './publisher/publisher.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    CanvasComponent,
    PublisherComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path:'post', component: PostComponent},
      {path:'canvas', component: CanvasComponent},
      {path:'publish', component: PublisherComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
