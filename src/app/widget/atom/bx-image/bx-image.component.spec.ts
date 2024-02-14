import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxImageComponent } from './bx-image.component';

describe('BxImageComponent', () => {
  let component: BxImageComponent;
  let fixture: ComponentFixture<BxImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxImageComponent]
    });
    fixture = TestBed.createComponent(BxImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
