import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropoffNewComponent } from './dropoff-new.component';

describe('DropoffNewComponent', () => {
  let component: DropoffNewComponent;
  let fixture: ComponentFixture<DropoffNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropoffNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropoffNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
