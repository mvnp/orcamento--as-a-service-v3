import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleContractsComponent } from './sample-contracts.component';

describe('SampleContractsComponent', () => {
  let component: SampleContractsComponent;
  let fixture: ComponentFixture<SampleContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleContractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
