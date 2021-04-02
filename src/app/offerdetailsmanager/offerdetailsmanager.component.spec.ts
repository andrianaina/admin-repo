import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdetailsmanagerComponent } from './offerdetailsmanager.component';

describe('OfferdetailsmanagerComponent', () => {
  let component: OfferdetailsmanagerComponent;
  let fixture: ComponentFixture<OfferdetailsmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdetailsmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdetailsmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
