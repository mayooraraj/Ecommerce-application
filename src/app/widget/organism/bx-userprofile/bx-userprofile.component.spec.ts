import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxUserprofileComponent } from './bx-userprofile.component';

describe('BxUserprofileComponent', () => {
  let component: BxUserprofileComponent;
  let fixture: ComponentFixture<BxUserprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxUserprofileComponent]
    });
    fixture = TestBed.createComponent(BxUserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
