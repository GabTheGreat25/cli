import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNameComponent } from './navbar-name.component';

describe('NavbarNameComponent', () => {
  let component: NavbarNameComponent;
  let fixture: ComponentFixture<NavbarNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
