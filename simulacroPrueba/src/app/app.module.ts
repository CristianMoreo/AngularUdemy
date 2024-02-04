import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListProductosComponent } from './list-productos/list-productos.component';
import { DescProductosComponent } from './desc-productos/desc-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductosComponent,
    DescProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
