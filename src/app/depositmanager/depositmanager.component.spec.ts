import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositmanagerComponent } from './depositmanager.component';

describe('DepositmanagerComponent', () => {
  let component: DepositmanagerComponent;
  let fixture: ComponentFixture<DepositmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
