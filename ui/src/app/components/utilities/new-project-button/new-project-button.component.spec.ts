import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectButtonComponent } from './new-project-button.component';

describe('NewProjectButtonComponent', () => {
  let component: NewProjectButtonComponent;
  let fixture: ComponentFixture<NewProjectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
