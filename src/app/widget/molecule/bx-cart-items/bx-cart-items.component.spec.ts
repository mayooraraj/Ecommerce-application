import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxCartItemsComponent } from './bx-cart-items.component';

describe('BxCartItemsComponent', () => {
  let component: BxCartItemsComponent;
  let fixture: ComponentFixture<BxCartItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxCartItemsComponent]
    });
    fixture = TestBed.createComponent(BxCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
