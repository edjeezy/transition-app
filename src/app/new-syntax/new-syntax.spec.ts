import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSyntax } from './new-syntax';

describe('NewSyntax', () => {
  let component: NewSyntax;
  let fixture: ComponentFixture<NewSyntax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSyntax]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSyntax);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
