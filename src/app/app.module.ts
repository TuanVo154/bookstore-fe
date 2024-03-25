import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalMenuComponent } from './navigation-bar/modal/modal-menu.component';
import { ModalLoginSignupComponent } from './navigation-bar/modal-login-signup/modal-login-signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SlideBannerComponent } from './home-page/slide-banner/slide-banner.component';
import { ListCategoriesComponent } from './home-page/list-categories/list-categories.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRouter: Routes = [
  {
    path: 'index',
    component: HomePageComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ModalMenuComponent,
    ModalLoginSignupComponent,
    HomePageComponent,
    SlideBannerComponent,
    ListCategoriesComponent,
    SignupComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    RouterModule.forRoot(appRouter),
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
