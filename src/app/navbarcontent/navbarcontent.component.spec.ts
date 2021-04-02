import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcontentComponent } from './navbarcontent.component';

describe('NavbarcontentComponent', () => {
  let component: NavbarcontentComponent;
  let fixture: ComponentFixture<NavbarcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
