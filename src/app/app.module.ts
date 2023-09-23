import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NicolasComponent } from './nicolas/nicolas.component';
import { FabianComponent } from './fabian/fabian.component';
import { GuillaumeComponent } from './guillaume/guillaume.component';
import { YohanComponent } from './yohan/yohan.component';

@NgModule({
  declarations: [
    AppComponent,
    NicolasComponent,
    FabianComponent,
    GuillaumeComponent,
    YohanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
