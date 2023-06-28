import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlookComponent } from './newlook.component';

describe('NewlookComponent', () => {
  let component: NewlookComponent;
  let fixture: ComponentFixture<NewlookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewlookComponent]
    });
    fixture = TestBed.createComponent(NewlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
