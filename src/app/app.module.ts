import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IpdetailsComponent } from './ipdetails/ipdetails.component';
import { FormsModule } from '@angular/forms';
import { IptableComponent } from './iptable/iptable.component';

@NgModule({
  declarations: [
    AppComponent,
    IpdetailsComponent,
    IptableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
