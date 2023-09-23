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


@NgModule({
  declarations: [AppComponent, NicolasComponent, FabianComponent, GuillaumeComponent, YohanComponent, WelcomeComponent],
  imports: [BrowserModule,HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'guillaume', component: GuillaumeComponent},
      { path: 'nicolas', component: NicolasComponent},
      { path: 'fabian', component: FabianComponent},
      { path: 'yohan', component: YohanComponent},
      { path: '', redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
