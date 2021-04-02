import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferlisteComponent } from './offerliste.component';

describe('OfferlisteComponent', () => {
  let component: OfferlisteComponent;
  let fixture: ComponentFixture<OfferlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferlisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
