import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySampleContractsComponent } from './my-sample-contracts.component';

describe('MySampleContractsComponent', () => {
  let component: MySampleContractsComponent;
  let fixture: ComponentFixture<MySampleContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySampleContractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySampleContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
