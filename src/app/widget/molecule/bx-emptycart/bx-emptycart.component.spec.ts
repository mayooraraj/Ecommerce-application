import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxEmptycartComponent } from './bx-emptycart.component';

describe('BxEmptycartComponent', () => {
  let component: BxEmptycartComponent;
  let fixture: ComponentFixture<BxEmptycartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxEmptycartComponent]
    });
    fixture = TestBed.createComponent(BxEmptycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
