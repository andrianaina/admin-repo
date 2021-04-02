import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdetailsupdatemanagerComponent } from './offerdetailsupdatemanager.component';

describe('OfferdetailsupdatemanagerComponent', () => {
  let component: OfferdetailsupdatemanagerComponent;
  let fixture: ComponentFixture<OfferdetailsupdatemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdetailsupdatemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdetailsupdatemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
