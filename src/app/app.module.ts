import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

//import { AppShellModule } from '@angular/app-shell'; Estto ya no es necesario, verificar

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    //AppShellModule.runtime()  Estto ya no es necesario, verificar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
