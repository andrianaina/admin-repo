import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticmanagerComponent } from './statisticmanager.component';

describe('StatisticmanagerComponent', () => {
  let component: StatisticmanagerComponent;
  let fixture: ComponentFixture<StatisticmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
