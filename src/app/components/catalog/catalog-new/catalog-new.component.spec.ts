import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogNewComponent } from './catalog-new.component';

describe('CatalogNewComponent', () => {
  let component: CatalogNewComponent;
  let fixture: ComponentFixture<CatalogNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
