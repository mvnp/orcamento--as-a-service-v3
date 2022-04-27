import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMyModelComponent } from './create-my-model.component';

describe('CreateMyModelComponent', () => {
  let component: CreateMyModelComponent;
  let fixture: ComponentFixture<CreateMyModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMyModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
