import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPresetComponent } from './pop-up-preset.component';

describe('PopUpPresetComponent', () => {
  let component: PopUpPresetComponent;
  let fixture: ComponentFixture<PopUpPresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpPresetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
