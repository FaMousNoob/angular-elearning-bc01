import { TestBed } from '@angular/core/testing';

import { ShareCategoryService } from './share-category.service';

describe('ShareCategoryService', () => {
  let service: ShareCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
