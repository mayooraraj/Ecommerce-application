import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxCarouselComponent } from './bx-carousel.component';

describe('BxCarouselComponent', () => {
  let component: BxCarouselComponent;
  let fixture: ComponentFixture<BxCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxCarouselComponent]
    });
    fixture = TestBed.createComponent(BxCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
