import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDiplayComponent } from './task-diplay.component';

describe('TaskDiplayComponent', () => {
  let component: TaskDiplayComponent;
  let fixture: ComponentFixture<TaskDiplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDiplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
