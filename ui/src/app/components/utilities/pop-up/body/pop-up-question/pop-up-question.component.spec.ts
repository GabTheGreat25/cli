import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpQuestionComponent } from './pop-up-question.component';

describe('PopUpQuestionComponent', () => {
  let component: PopUpQuestionComponent;
  let fixture: ComponentFixture<PopUpQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
