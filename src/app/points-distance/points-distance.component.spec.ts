import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsDistanceComponent } from './points-distance.component';

describe('PointsDistanceComponent', () => {
  let component: PointsDistanceComponent;
  let fixture: ComponentFixture<PointsDistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointsDistanceComponent]
    });
    fixture = TestBed.createComponent(PointsDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
