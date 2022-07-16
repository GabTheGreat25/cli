import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpClearComponent } from './pop-up-clear.component';

describe('PopUpClearComponent', () => {
  let component: PopUpClearComponent;
  let fixture: ComponentFixture<PopUpClearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpClearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
