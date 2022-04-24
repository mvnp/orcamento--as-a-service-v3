import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetChatterComponent } from './budget-chatter.component';

describe('BudgetChatterComponent', () => {
  let component: BudgetChatterComponent;
  let fixture: ComponentFixture<BudgetChatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetChatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetChatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
