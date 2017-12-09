import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionpointEditComponent } from './collectionpoint-edit.component';

describe('CollectionpointEditComponent', () => {
  let component: CollectionpointEditComponent;
  let fixture: ComponentFixture<CollectionpointEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionpointEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionpointEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
