import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxLabelComponent } from './bx-label.component';

describe('BxLabelComponent', () => {
  let component: BxLabelComponent;
  let fixture: ComponentFixture<BxLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxLabelComponent]
    });
    fixture = TestBed.createComponent(BxLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
