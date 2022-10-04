import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SuccessComponent } from './success/success.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MyPrinciplesComponent } from './my-principles/my-principles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BackToTopBtnComponent } from './back-to-top-btn/back-to-top-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    MyWorkComponent,
    ContactMeComponent,
    SuccessComponent,
    LegalNoticeComponent,
    MyPrinciplesComponent,
    PageNotFoundComponent,
    BackToTopBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
