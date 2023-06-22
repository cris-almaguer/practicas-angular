import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistancesComponent } from './resistances.component';

describe('ResistancesComponent', () => {
  let component: ResistancesComponent;
  let fixture: ComponentFixture<ResistancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistancesComponent]
    });
    fixture = TestBed.createComponent(ResistancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
