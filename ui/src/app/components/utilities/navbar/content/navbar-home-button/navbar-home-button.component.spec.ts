import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHomeButtonComponent } from './navbar-home-button.component';

describe('NavbarHomeButtonComponent', () => {
  let component: NavbarHomeButtonComponent;
  let fixture: ComponentFixture<NavbarHomeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHomeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarHomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
