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
    console.log(this.isModelSignInVisible);
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
}
