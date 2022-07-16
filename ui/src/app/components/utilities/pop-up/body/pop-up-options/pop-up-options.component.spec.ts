import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpOptionsComponent } from './pop-up-options.component';

describe('PopUpOptionsComponent', () => {
  let component: PopUpOptionsComponent;
  let fixture: ComponentFixture<PopUpOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
