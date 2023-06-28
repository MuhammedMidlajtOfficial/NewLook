import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSelectionComponent } from './admin-selection.component';

describe('AdminSelectionComponent', () => {
  let component: AdminSelectionComponent;
  let fixture: ComponentFixture<AdminSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSelectionComponent]
    });
    fixture = TestBed.createComponent(AdminSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
