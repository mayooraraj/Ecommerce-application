import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxUserLoginComponent } from './bx-user-login.component';

describe('BxUserLoginComponent', () => {
  let component: BxUserLoginComponent;
  let fixture: ComponentFixture<BxUserLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxUserLoginComponent]
    });
    fixture = TestBed.createComponent(BxUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
