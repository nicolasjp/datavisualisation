import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomeComponent } from "./welcome/welcome.component";
import { NicolasComponent } from './nicolas/nicolas.component';
import { FabianComponent } from './fabian/fabian.component';
import { GuillaumeComponent } from './guillaume/guillaume.component';
import { YohanComponent } from './yohan/yohan.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { DetailArtisteComponent } from './detail-artiste/detail-artiste.component';


@NgModule({
  declarations: [AppComponent, NicolasComponent, FabianComponent, GuillaumeComponent, YohanComponent, WelcomeComponent, DetailArtisteComponent],
  imports: [BrowserModule,HttpClientModule, FormsModule, CommonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'guillaume', component: GuillaumeComponent},
      { path: 'nicolas', component: NicolasComponent},
      { path: 'nicolas/:id', component: DetailArtisteComponent},
      { path: 'fabian', component: FabianComponent},
      { path: 'yohan', component: YohanComponent},
      { path: '', redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
