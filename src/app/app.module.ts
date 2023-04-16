import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TopBlockComponent } from './top-block/top-block.component';
import {SharedModule} from "./shared/shared.module";
import { LoginComponent } from './content-block/login/login.component';
import { HomeComponent } from './content-block/home/home.component';
import { CamperComponent } from './content-block/camper/camper.component';
import { ErrPageComponent } from './content-block/err-page/err-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { AboutComponent } from './content-block/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBlockComponent,
    LoginComponent,
    HomeComponent,
    CamperComponent,
    ErrPageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
