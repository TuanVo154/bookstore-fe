import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent {
  isModelSignInVisible: boolean = true;
  isModelCategoriesVisible: boolean = true;

  onModelSignIn() {
    this.isModelSignInVisible = false;
  }

  onModelCategories() {
    this.isModelCategoriesVisible = false;
  }

  onMouseLeaveModelSignIn() {
    setTimeout(() => {
      this.isModelSignInVisible = true;
    }, 2000);
  }

  onMouseLeaveModelCategories() {
    setTimeout(() => {
      this.isModelCategoriesVisible = true;
    }, 2000);
  }
}
