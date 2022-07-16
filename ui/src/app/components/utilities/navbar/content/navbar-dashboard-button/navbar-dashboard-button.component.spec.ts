import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDashboardButtonComponent } from './navbar-dashboard-button.component';

describe('NavbarDashboardButtonComponent', () => {
  let component: NavbarDashboardButtonComponent;
  let fixture: ComponentFixture<NavbarDashboardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDashboardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDashboardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
