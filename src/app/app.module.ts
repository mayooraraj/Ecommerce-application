import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//material ui
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BxHeaderComponent } from './widget/organism/bx-header/bx-header.component';
import { BxHomepageComponent } from './pages/bx-homepage/bx-homepage.component';
import { BxInputFieldComponent } from './widget/atom/bx-input-field/bx-input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BxButtonComponent } from './widget/atom/bx-button/bx-button.component';
import { BxLabelComponent } from './widget/atom/bx-label/bx-label.component';
import { BxImageComponent } from './widget/atom/bx-image/bx-image.component';
import { BxUserLoginComponent } from './widget/organism/bx-user-login/bx-user-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BxUserprofileComponent } from './widget/organism/bx-userprofile/bx-userprofile.component';
import { BxCartComponent } from './widget/organism/bx-cart/bx-cart.component';
import { BxBtmcardsComponent } from './widget/molecule/bx-btmcards/bx-btmcards.component';
import { BxEmptycartComponent } from './widget/molecule/bx-emptycart/bx-emptycart.component';
import { BxCartItemsComponent } from './widget/molecule/bx-cart-items/bx-cart-items.component';
import { BxCarouselComponent } from './widget/molecule/bx-carousel/bx-carousel.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BxFooterTopComponent } from './widget/molecule/bx-footer-top/bx-footer-top.component';
import { BxFootertopCardsComponent } from './widget/organism/bx-footertop-cards/bx-footertop-cards.component';




@NgModule({
  declarations: [
    AppComponent,
    BxHeaderComponent,
    BxHomepageComponent,
    BxInputFieldComponent,
    BxButtonComponent,
    BxLabelComponent,
    BxImageComponent,
    BxUserLoginComponent,
    BxUserprofileComponent,
    BxCartComponent,
    BxBtmcardsComponent,
    BxEmptycartComponent,
    BxCartItemsComponent,
    BxCarouselComponent,
    FilterPipe,
    BxFooterTopComponent,
    BxFootertopCardsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
