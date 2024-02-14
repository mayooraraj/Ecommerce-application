import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxFooterTopComponent } from './bx-footer-top.component';

describe('BxFooterTopComponent', () => {
  let component: BxFooterTopComponent;
  let fixture: ComponentFixture<BxFooterTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxFooterTopComponent]
    });
    fixture = TestBed.createComponent(BxFooterTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
