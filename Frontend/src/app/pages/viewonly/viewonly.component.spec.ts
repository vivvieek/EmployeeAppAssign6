import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewonlyComponent } from './viewonly.component';

describe('ViewonlyComponent', () => {
  let component: ViewonlyComponent;
  let fixture: ComponentFixture<ViewonlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewonlyComponent]
    });
    fixture = TestBed.createComponent(ViewonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
