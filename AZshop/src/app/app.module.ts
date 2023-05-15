import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { PopupKontaktyComponent } from './popup-kontakty/popup-kontakty.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BucketComponent } from './bucket/bucket.component';
import { ItemBucketComponent } from './item-bucket/item-bucket.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavItemComponent,
    PopupKontaktyComponent,
    ProductListComponent,
    BucketComponent,
    ItemBucketComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
