import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferupdateComponent } from './offerupdate.component';

describe('OfferupdateComponent', () => {
  let component: OfferupdateComponent;
  let fixture: ComponentFixture<OfferupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
