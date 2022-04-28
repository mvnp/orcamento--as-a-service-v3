import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatePartnersComponent } from './estimate-partners.component';

describe('EstimatePartnersComponent', () => {
  let component: EstimatePartnersComponent;
  let fixture: ComponentFixture<EstimatePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatePartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
