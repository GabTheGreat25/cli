import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFolderComponent } from './side-folder.component';

describe('SideFolderComponent', () => {
  let component: SideFolderComponent;
  let fixture: ComponentFixture<SideFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
