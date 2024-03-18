import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelLoginSignupComponent } from './model-login-signup.component';

describe('ModelLoginSignupComponent', () => {
  let component: ModelLoginSignupComponent;
  let fixture: ComponentFixture<ModelLoginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelLoginSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
