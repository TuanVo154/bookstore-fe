import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent {
  isModelSignInVisible: boolean = true;
  isModelCategoriesVisible: boolean = true;
  showNavigation: boolean = true;

  onModelSignIn() {
    this.isModelSignInVisible = false;
  }

  onModelCategories() {
    this.isModelCategoriesVisible = false;
  }

  onMouseLeaveModelSignIn() {
    this.isModelSignInVisible = true;
  }

  onMouseLeaveModelCategories() {
    this.isModelCategoriesVisible = true;
  }

  transferToSignUp(event: any) {
    if (event instanceof NavigationEnd) {
      if (event.url === '/signup') {
        this.showNavigation = false;
      } else {
        this.showNavigation = true;
      }
    }
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.transferToSignUp(event);
    });
  }
}
