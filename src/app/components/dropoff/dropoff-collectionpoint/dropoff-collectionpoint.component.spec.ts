import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropoffCollectionpointComponent } from './dropoff-collectionpoint.component';

describe('DropoffCollectionpointComponent', () => {
  let component: DropoffCollectionpointComponent;
  let fixture: ComponentFixture<DropoffCollectionpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropoffCollectionpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropoffCollectionpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
