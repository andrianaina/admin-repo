import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferupdatemanagerComponent } from './offerupdatemanager.component';

describe('OfferupdatemanagerComponent', () => {
  let component: OfferupdatemanagerComponent;
  let fixture: ComponentFixture<OfferupdatemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferupdatemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferupdatemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
