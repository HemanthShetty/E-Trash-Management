import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionpointNewComponent } from './collectionpoint-new.component';

describe('CollectionpointNewComponent', () => {
  let component: CollectionpointNewComponent;
  let fixture: ComponentFixture<CollectionpointNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionpointNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionpointNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
