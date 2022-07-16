import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHeadComponent } from './navbar-head.component';

describe('NavbarHeadComponent', () => {
  let component: NavbarHeadComponent;
  let fixture: ComponentFixture<NavbarHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
