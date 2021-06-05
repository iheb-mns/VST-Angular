import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceOneComponent } from './components/pages/service-one/service-one.component';
import { ServiceTwoComponent } from './components/pages/service-two/service-two.component';
import { ServiceDetailComponent } from './components/pages/service-detail/service-detail.component';
import { PortfolioOneComponent } from './components/pages/portfolio-one/portfolio-one.component';
import { PortfolioTwoComponent } from './components/pages/portfolio-two/portfolio-two.component';
import { ProjectDetailComponent } from './components/pages/project-detail/project-detail.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ShopDetailComponent } from './components/pages/shop-detail/shop-detail.component';
import { NewsGridComponent } from './components/pages/news-grid/news-grid.component';
import { NewsStandardComponent } from './components/pages/news-standard/news-standard.component';
import { NewsDetailComponent } from './components/pages/news-detail/news-detail.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CareersComponent } from './components/pages/careers/careers.component';
import { HotelsComponent } from './components/pages/hotels/hotels.component';
import { HotelDetailsComponent } from './components/pages/hotel-details/hotel-details.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { TestpageComponent } from './components/pages/testpage/testpage.component';



const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home-two',component:HomeTwoComponent},
  {path:'home-three',component:HomeThreeComponent},
  {path:'about',component:AboutComponent},
  {path:'service-1',component:ServiceOneComponent},
  {path:'service-2',component:ServiceTwoComponent},
  {path:'service-detail',component:ServiceDetailComponent},
  {path:'portfolio-1',component:PortfolioOneComponent},
  {path:'portfolio-2',component:PortfolioTwoComponent},
  {path:'project-detail',component:ProjectDetailComponent},
  {path:'shop',component:ShopComponent},
  {path:'shop-detail',component:ShopDetailComponent},
  {path:'news-grid',component:NewsGridComponent},
  {path:'news-standard',component:NewsStandardComponent},
  {path:'news-detail',component:NewsDetailComponent},
  {path:'team',component:TeamComponent},
  {path:'careers',component:CareersComponent},
  {path:'contact',component:ContactComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'hotel-details/:id',component:HotelDetailsComponent},
  {path:'home',component:HomePageComponent},
  {path:'test',component:TestpageComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
