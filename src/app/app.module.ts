import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrandNavbarComponent } from './components/brand-navbar/brand-navbar.component';
import { BrandHomeComponent } from './components/home/brand-home/brand-home.component';
import { BrandAddListingComponent } from './components/home/brand-add-listing/brand-add-listing.component';
import { BrandHomeDetailComponent } from './components/home/brand-home-detail/brand-home-detail.component';
import { ChimerHomeComponent } from './components/home/chimer-home/chimer-home.component';
import { ChimerListingService } from './services/chimer-listing.service';
import { UserLoginService } from './services/user-login.service';
import { BrandListingService } from './services/brand-listing.service';
import { ChimerNavbarComponent } from './components/chimer-navbar/chimer-navbar.component';

const appRoutes : Routes = [
  { path:'login', component: LoginComponent},
  { path:'brand', component: BrandHomeComponent},  
  { path:'brand/listing/:id', component: BrandHomeDetailComponent},
  { path:'brand/add-listing', component: BrandAddListingComponent},
  { path:'chimer', component: ChimerHomeComponent},
  { path:'chimer/current-jobs', component: ChimerHomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BrandNavbarComponent,
    BrandHomeComponent,
    LoginComponent,
    BrandAddListingComponent,
    BrandHomeDetailComponent,
    ChimerHomeComponent,
    ChimerNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ChimerListingService,BrandListingService,UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
