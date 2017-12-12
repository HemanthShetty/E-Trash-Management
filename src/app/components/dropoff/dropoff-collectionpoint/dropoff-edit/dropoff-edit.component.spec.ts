import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropoffEditComponent } from './dropoff-edit.component';

describe('DropoffEditComponent', () => {
  let component: DropoffEditComponent;
  let fixture: ComponentFixture<DropoffEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropoffEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropoffEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
