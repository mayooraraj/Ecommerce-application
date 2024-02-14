import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxBtmcardsComponent } from './bx-btmcards.component';

describe('BxBtmcardsComponent', () => {
  let component: BxBtmcardsComponent;
  let fixture: ComponentFixture<BxBtmcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxBtmcardsComponent]
    });
    fixture = TestBed.createComponent(BxBtmcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
