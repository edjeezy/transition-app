import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputOutput } from './signal-input-output';

describe('SignalInputOutput', () => {
  let component: SignalInputOutput;
  let fixture: ComponentFixture<SignalInputOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInputOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInputOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
