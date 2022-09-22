import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrinciplesComponent } from './my-principles.component';

describe('MyPrinciplesComponent', () => {
  let component: MyPrinciplesComponent;
  let fixture: ComponentFixture<MyPrinciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPrinciplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
