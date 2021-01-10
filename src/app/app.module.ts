import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolsComponent } from './vols/vols.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { UpdateVolComponent } from './update-vol/update-vol.component';
@NgModule({
  declarations: [
    AppComponent,
    VolsComponent,
    AddVolComponent,
    UpdateComponent,
    UpdateVolComponent
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
