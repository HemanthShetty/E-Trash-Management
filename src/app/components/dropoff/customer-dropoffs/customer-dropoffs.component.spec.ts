import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDropoffsComponent } from './customer-dropoffs.component';

describe('CustomerDropoffsComponent', () => {
  let component: CustomerDropoffsComponent;
  let fixture: ComponentFixture<CustomerDropoffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDropoffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDropoffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
