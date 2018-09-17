import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { NavbarModule, WavesModule, ButtonsModule, InputsModule, CardsFreeModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    JwtModule,

    NavbarModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    CardsFreeModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [JwtHelperService],
  declarations: [LoginComponent]
})
export class SegurancaModule { }
