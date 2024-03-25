import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoginSignupComponent } from './modal-login-signup.component';

describe('ModalLoginSignupComponent', () => {
  let component: ModalLoginSignupComponent;
  let fixture: ComponentFixture<ModalLoginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalLoginSignupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
