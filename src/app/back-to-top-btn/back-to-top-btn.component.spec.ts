import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTopBtnComponent } from './back-to-top-btn.component';

describe('BackToTopBtnComponent', () => {
  let component: BackToTopBtnComponent;
  let fixture: ComponentFixture<BackToTopBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToTopBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackToTopBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
