import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxInputFieldComponent } from './bx-input-field.component';

describe('BxInputFieldComponent', () => {
  let component: BxInputFieldComponent;
  let fixture: ComponentFixture<BxInputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxInputFieldComponent]
    });
    fixture = TestBed.createComponent(BxInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
