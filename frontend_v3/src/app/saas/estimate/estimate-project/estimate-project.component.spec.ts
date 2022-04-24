import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateProjectComponent } from './estimate-project.component';

describe('EstimateProjectComponent', () => {
  let component: EstimateProjectComponent;
  let fixture: ComponentFixture<EstimateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
