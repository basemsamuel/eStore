import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }