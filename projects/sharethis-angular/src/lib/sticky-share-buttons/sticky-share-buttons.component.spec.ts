import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyShareButtonsComponent } from './sticky-share-buttons.component';

describe('StickyShareButtonsComponent', () => {
  let component: StickyShareButtonsComponent;
  let fixture: ComponentFixture<StickyShareButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyShareButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyShareButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
