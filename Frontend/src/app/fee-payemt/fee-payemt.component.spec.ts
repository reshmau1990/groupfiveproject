import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeePayemtComponent } from './fee-payemt.component';

describe('FeePayemtComponent', () => {
  let component: FeePayemtComponent;
  let fixture: ComponentFixture<FeePayemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeePayemtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeePayemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
