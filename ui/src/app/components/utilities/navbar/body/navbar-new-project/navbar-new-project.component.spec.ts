import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNewProjectComponent } from './navbar-new-project.component';

describe('NavbarNewProjectComponent', () => {
  let component: NavbarNewProjectComponent;
  let fixture: ComponentFixture<NavbarNewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNewProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
