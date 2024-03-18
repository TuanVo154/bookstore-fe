import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { ModelMenuComponent } from './navigation-bar/model/model-menu.component';
import { ModelLoginSignupComponent } from './navigation-bar/model-login-signup/model-login-signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SlideBannerComponent } from './home-page/slide-banner/slide-banner.component';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, ModelMenuComponent, ModelLoginSignupComponent, HomePageComponent, SlideBannerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
