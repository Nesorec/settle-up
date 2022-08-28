import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDebtDialogueComponent } from './new-debt-dialogue.component';

describe('NewDebtDialogueComponent', () => {
  let component: NewDebtDialogueComponent;
  let fixture: ComponentFixture<NewDebtDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDebtDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDebtDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
