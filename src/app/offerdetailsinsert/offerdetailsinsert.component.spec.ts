import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdetailsinsertComponent } from './offerdetailsinsert.component';

describe('OfferdetailsinsertComponent', () => {
  let component: OfferdetailsinsertComponent;
  let fixture: ComponentFixture<OfferdetailsinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdetailsinsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdetailsinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
