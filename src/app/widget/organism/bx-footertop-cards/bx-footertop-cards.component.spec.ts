import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxFootertopCardsComponent } from './bx-footertop-cards.component';

describe('BxFootertopCardsComponent', () => {
  let component: BxFootertopCardsComponent;
  let fixture: ComponentFixture<BxFootertopCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxFootertopCardsComponent]
    });
    fixture = TestBed.createComponent(BxFootertopCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
