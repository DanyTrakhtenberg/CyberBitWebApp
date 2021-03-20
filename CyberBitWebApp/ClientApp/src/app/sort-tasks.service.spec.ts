import { TestBed } from '@angular/core/testing';

import { SortTasksService } from './sort-tasks.service';

describe('SortTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortTasksService = TestBed.get(SortTasksService);
    expect(service).toBeTruthy();
  });
});
