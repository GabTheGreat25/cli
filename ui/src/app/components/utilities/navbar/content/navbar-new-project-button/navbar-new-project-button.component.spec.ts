import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNewProjectButtonComponent } from './navbar-new-project-button.component';

describe('NavbarNewProjectButtonComponent', () => {
  let component: NavbarNewProjectButtonComponent;
  let fixture: ComponentFixture<NavbarNewProjectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNewProjectButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNewProjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
