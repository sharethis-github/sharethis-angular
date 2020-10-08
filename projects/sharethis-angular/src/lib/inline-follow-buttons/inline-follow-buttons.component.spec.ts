import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineFollowButtonsComponent } from './inline-follow-buttons.component';

describe('InlineFollowButtonsComponent', () => {
  let component: InlineFollowButtonsComponent;
  let fixture: ComponentFixture<InlineFollowButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InlineFollowButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineFollowButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
