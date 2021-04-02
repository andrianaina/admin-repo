import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdetailsupdateComponent } from './offerdetailsupdate.component';

describe('OfferdetailsupdateComponent', () => {
  let component: OfferdetailsupdateComponent;
  let fixture: ComponentFixture<OfferdetailsupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdetailsupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdetailsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
