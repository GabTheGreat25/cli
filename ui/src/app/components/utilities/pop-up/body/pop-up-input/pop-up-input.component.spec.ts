import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpInputComponent } from './pop-up-input.component';

describe('PopUpInputComponent', () => {
  let component: PopUpInputComponent;
  let fixture: ComponentFixture<PopUpInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
