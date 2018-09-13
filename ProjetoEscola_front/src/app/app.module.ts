import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule, InputsModule, CardsFreeModule  } from 'angular-bootstrap-md';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
   // MAATERIAL DESIGN FOR BOOTSTRAP - ANGULAR
    NavbarModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    CardsFreeModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
