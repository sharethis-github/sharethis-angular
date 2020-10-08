import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineReactionButtonsComponent } from './inline-reaction-buttons.component';

describe('InlineReactionButtonsComponent', () => {
  let component: InlineReactionButtonsComponent;
  let fixture: ComponentFixture<InlineReactionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InlineReactionButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineReactionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
