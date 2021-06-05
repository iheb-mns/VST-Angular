import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderOneComponent } from './components/layouts/header-one/header-one.component';
import { HeaderTwoComponent } from './components/layouts/header-two/header-two.component';
import { HeaderThreeComponent } from './components/layouts/header-three/header-three.component';
import { FooterOneComponent } from './components/layouts/footer-one/footer-one.component';
import { FooterTwoComponent } from './components/layouts/footer-two/footer-two.component';
import { FooterThreeComponent } from './components/layouts/footer-three/footer-three.component';
import { NewsSidebarComponent } from './components/layouts/news-sidebar/news-sidebar.component';
import { ServiceSidebarComponent } from './components/layouts/service-sidebar/service-sidebar.component';
import { ShopSidebarComponent } from './components/layouts/shop-sidebar/shop-sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceOneComponent } from './components/pages/service-one/service-one.component';
import { ServiceTwoComponent } from './components/pages/service-two/service-two.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PortfolioOneComponent } from './components/pages/portfolio-one/portfolio-one.component';
import { PortfolioTwoComponent } from './components/pages/portfolio-two/portfolio-two.component';
import { CareersComponent } from './components/pages/careers/careers.component';
import { NewsGridComponent } from './components/pages/news-grid/news-grid.component';
import { NewsStandardComponent } from './components/pages/news-standard/news-standard.component';
import { NewsDetailComponent } from './components/pages/news-detail/news-detail.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ShopDetailComponent } from './components/pages/shop-detail/shop-detail.component';
import { ProjectDetailComponent } from './components/pages/project-detail/project-detail.component';
import { ServiceDetailComponent } from './components/pages/service-detail/service-detail.component';
import { HotelDetailsComponent } from './components/pages/hotel-details/hotel-details.component';
import { HotelsComponent } from './components/pages/hotels/hotels.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { TestpageComponent } from './components/pages/testpage/testpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    FooterOneComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    NewsSidebarComponent,
    ServiceSidebarComponent,
    ShopSidebarComponent,
    HomeComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    AboutComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    TeamComponent,
    PortfolioOneComponent,
    PortfolioTwoComponent,
    CareersComponent,
    NewsGridComponent,
    NewsStandardComponent,
    NewsDetailComponent,
    ContactComponent,
    ShopComponent,
    ShopDetailComponent,
    ProjectDetailComponent,
    ServiceDetailComponent,
    HotelDetailsComponent,
    HotelsComponent,
    HomePageComponent,
    TestpageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
      Location, {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
