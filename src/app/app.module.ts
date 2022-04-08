import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RoxellycomponentComponent } from './roxellycomponent/roxellycomponent.component';
import { RoxellylistacomponentComponent } from './roxellylistacomponent/roxellylistacomponent.component';
import { RoxellydetalhescomponentComponent } from './roxellydetalhescomponent/roxellydetalhescomponent.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: 'roxellycomponent', component: RoxellycomponentComponent },
    { path: 'roxellydetalhescomponent', component: RoxellydetalhescomponentComponent },
    { path: 'roxellylistacomponent', component: RoxellylistacomponentComponent },
  ]),
],
  declarations: [ AppComponent, HelloComponent, RoxellycomponentComponent, RoxellylistacomponentComponent, RoxellydetalhescomponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
