import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFileComponent } from './choose-file.component';

describe('ChooseFileComponent', () => {
  let component: ChooseFileComponent;
  let fixture: ComponentFixture<ChooseFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
