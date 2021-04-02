import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferinsertComponent } from './offerinsert.component';

describe('OfferinsertComponent', () => {
  let component: OfferinsertComponent;
  let fixture: ComponentFixture<OfferinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferinsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
