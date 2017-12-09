import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionpointListComponent } from './collectionpoint-list.component';

describe('CollectionpointListComponent', () => {
  let component: CollectionpointListComponent;
  let fixture: ComponentFixture<CollectionpointListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionpointListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionpointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
