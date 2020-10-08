import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineShareButtonsComponent } from './inline-share-buttons.component';

describe('InlineShareButtonsComponent', () => {
  let component: InlineShareButtonsComponent;
  let fixture: ComponentFixture<InlineShareButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InlineShareButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineShareButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
