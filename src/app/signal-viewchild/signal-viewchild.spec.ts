import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalViewchild } from './signal-viewchild';

describe('SignalViewchild', () => {
  let component: SignalViewchild;
  let fixture: ComponentFixture<SignalViewchild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalViewchild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalViewchild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
